import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function GET() {
  try {
    const { data: settings, error } = await supabaseAdmin
      .from("email_settings")
      .select("*")
      .eq("is_active", true)
      .single()

    if (error && error.code !== "PGRST116") {
      return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 })
    }

    return NextResponse.json({ settings: settings || {} })
  } catch (error) {
    console.error("Error fetching email settings:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { smtp_host, smtp_port, smtp_username, smtp_password, from_email, from_name } = body

    // First, deactivate all existing settings
    await supabaseAdmin.from("email_settings").update({ is_active: false }).eq("is_active", true)

    // Insert new settings
    const { data, error } = await supabaseAdmin
      .from("email_settings")
      .insert({
        smtp_host,
        smtp_port,
        smtp_username,
        smtp_password,
        from_email,
        from_name,
        is_active: true,
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to save settings" }, { status: 500 })
    }

    return NextResponse.json({ success: true, settings: data })
  } catch (error) {
    console.error("Error saving email settings:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
