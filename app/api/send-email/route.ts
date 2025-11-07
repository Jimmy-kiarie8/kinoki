import { type NextRequest, NextResponse } from "next/server"
import { sendEmail, generateOrderConfirmationEmail, generateAdminNotificationEmail } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const { type, to, customerName, orderDetails } = await request.json()

    if (type === "order_confirmation") {
      // Send customer confirmation email
      if (to) {
        const html = generateOrderConfirmationEmail(customerName, orderDetails)
        const result = await sendEmail({
          to,
          subject: `Order Confirmation #${orderDetails.orderId} - Premium Kinoki Coffee`,
          html,
        })

        if (!result.success) {
          console.error("Failed to send customer email:", result.error)
        }
      }

      // Send admin notification email
      const adminHtml = generateAdminNotificationEmail({
        customerName,
        phone: orderDetails.phone,
        email: to,
        county: orderDetails.county,
        packageName: orderDetails.packageName,
        quantity: orderDetails.quantity,
        totalAmount: orderDetails.totalAmount,
      })

      const adminResult = await sendEmail({
        to: "admin@premiumbeardoil.co.ke", // Replace with actual admin email
        subject: `🔔 New Order from ${customerName} - KES ${orderDetails.totalAmount.toLocaleString()}`,
        html: adminHtml,
      })

      if (!adminResult.success) {
        console.error("Failed to send admin email:", adminResult.error)
      }

      return NextResponse.json({
        success: true,
        customerEmailSent: to ? true : false,
        adminEmailSent: adminResult.success,
      })
    }

    return NextResponse.json({ error: "Invalid email type" }, { status: 400 })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
