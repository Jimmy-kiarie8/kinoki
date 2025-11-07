import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies })

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    if (error || !user) {
      return NextResponse.json({ isAdmin: false })
    }

    const { data: adminProfile } = await supabase
      .from("admin_profiles")
      .select("*")
      .eq("id", user.id)
      .eq("is_active", true)
      .single()

    return NextResponse.json({ isAdmin: !!adminProfile })
  } catch (error) {
    return NextResponse.json({ isAdmin: false })
  }
}
