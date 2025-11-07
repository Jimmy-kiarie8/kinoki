import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerName, phone, email, county, quantity, packageType, totalAmount, packageName } = body

    // Insert order into database
    const { data: order, error } = await supabase
      .from("orders")
      .insert({
        customer_name: customerName,
        phone,
        email: email || null,
        county,
        quantity,
        package_type: packageType,
        total_amount: totalAmount,
        status: "pending",
        notes: `Package: ${packageName}`,
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
    }

    // Send confirmation email
    try {
      await fetch(`${request.nextUrl.origin}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "order_confirmation",
          to: email,
          customerName,
          orderDetails: {
            orderId: order.id,
            packageName,
            quantity,
            totalAmount,
            phone,
            county,
          },
        }),
      })
    } catch (emailError) {
      console.error("Email error:", emailError)
      // Don't fail the order if email fails
    }

    return NextResponse.json({ success: true, orderId: order.id })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data: orders, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false })

    if (error) {
      return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
    }

    return NextResponse.json({ orders })
  } catch (error) {
    console.error("Fetch orders error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
