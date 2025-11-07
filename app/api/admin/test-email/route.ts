import { type NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { to } = await request.json()

    const testHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #059669; color: white; padding: 20px; text-align: center; border-radius: 8px;">
          <h1>✅ Email Test Successful!</h1>
        </div>
        <div style="padding: 20px; background: #f9fafb; border-radius: 0 0 8px 8px;">
          <p>This is a test email from your Premium Kinoki Coffee email system.</p>
          <p>If you received this email, your SMTP configuration is working correctly!</p>
          <p><strong>Sent at:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `

    const result = await sendEmail({
      to,
      subject: "Test Email - Premium Kinoki Coffee System",
      html: testHtml,
    })

    if (result.success) {
      return NextResponse.json({ success: true, messageId: result.messageId })
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error("Test email error:", error)
    return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
  }
}
