import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey)
    : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      customerName,
      phone,
      email,
      county,
      quantity,
      packageType,
      totalAmount,
      packageName,
      altPhone,
      customerNotes,
    } = body

    if (!supabase) {
      console.error("Supabase credentials are not configured", {
        supabaseUrl,
        supabaseServiceRoleKey,
      })
      return NextResponse.json(
        { error: "Supabase credentials are not configured" },
        { status: 500 }
      )
    }

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
        alt_phone: altPhone || null,
        customer_notes: customerNotes || null,
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json(
        { error: error.message || "Failed to create order" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, orderId: order.id })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    if (!supabase) {
      console.error("Supabase credentials are not configured for GET", {
        supabaseUrl,
        supabaseServiceRoleKey,
      })
      return NextResponse.json(
        { error: "Supabase credentials are not configured" },
        { status: 500 }
      )
    }

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
