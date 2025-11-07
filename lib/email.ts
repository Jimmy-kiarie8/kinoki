import nodemailer from "nodemailer"
import { supabaseAdmin } from "./supabase"

interface EmailSettings {
  smtp_host: string
  smtp_port: number
  smtp_username: string
  smtp_password: string
  from_email: string
  from_name: string
}

async function getEmailSettings(): Promise<EmailSettings | null> {
  try {
    const { data, error } = await supabaseAdmin.from("email_settings").select("*").eq("is_active", true).single()

    if (error || !data) {
      console.error("Failed to fetch email settings:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error getting email settings:", error)
    return null
  }
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string
  subject: string
  html: string
  text?: string
}) {
  try {
    const settings = await getEmailSettings()

    
    if (!settings) {
      throw new Error("Email settings not configured")
    }

    // Create transporter with SMTP settings
    const transporter = nodemailer.createTransporter({
      host: settings.smtp_host,
      port: settings.smtp_port,
      secure: settings.smtp_port === 465, // true for 465, false for other ports
      auth: {
        user: settings.smtp_username,
        pass: settings.smtp_password,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    })

    // Verify connection
    await transporter.verify()

    // Send email
    const info = await transporter.sendMail({
      from: `"${settings.from_name}" <${settings.from_email}>`,
      to,
      subject,
      text: text || html.replace(/<[^>]*>/g, ""), // Strip HTML for text version
      html,
    })

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export function generateOrderConfirmationEmail(customerName: string, orderDetails: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation - Premium Kinoki Coffee for Men</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #059669, #047857); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Order Confirmation</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">Thank you for your order!</p>
        </div>
        
        <!-- Content -->
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151; margin-top: 0;">Hello ${customerName},</h2>
          <p style="color: #6b7280; font-size: 16px;">
            Thank you for ordering our Premium Kinoki Coffee for Men! Your order has been received and will be processed within 24 hours.
          </p>
          
          <!-- Order Details -->
          <div style="background: white; padding: 25px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #059669;">
            <h3 style="color: #059669; margin-top: 0; font-size: 20px;">📦 Order Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Order ID:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.orderId}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Package:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.packageName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Quantity:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.quantity}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Total Amount:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #059669; font-size: 18px;">KES ${orderDetails.totalAmount.toLocaleString()}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold;">Delivery Location:</td>
                <td style="padding: 12px 0;">${orderDetails.county}</td>
              </tr>
            </table>
          </div>
          
          <!-- Next Steps -->
          <div style="background: #ecfdf5; padding: 25px; border-radius: 8px; border: 1px solid #a7f3d0;">
            <h4 style="color: #059669; margin-top: 0; font-size: 18px;">🚀 What happens next?</h4>
            <ul style="color: #374151; padding-left: 20px; margin: 0;">
              <li style="margin-bottom: 8px;">✅ We'll call you within 24 hours to confirm your order</li>
              <li style="margin-bottom: 8px;">🚚 FREE delivery within 2-3 business days</li>
              <li style="margin-bottom: 8px;">💪 Start your beard transformation journey!</li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; text-align: center;">
            <h4 style="color: #374151; margin-top: 0;">Need Help?</h4>
            <p style="color: #6b7280; margin: 10px 0;">
              📧 <strong>Email:</strong> support@premiumbeardoil.co.ke<br>
              🕒 <strong>Hours:</strong> Monday - Friday, 8AM - 6PM
            </p>
          </div>
          
          <p style="color: #6b7280; margin-top: 30px; font-size: 14px;">
            Thank you for choosing Premium Kinoki Coffee for Men Kenya. We're excited to help you achieve the beard of your dreams!
          </p>
          
          <p style="color: #6b7280; margin-top: 20px;">
            Best regards,<br>
            <strong style="color: #059669;">The Premium Kinoki Coffee for Men Kenya Team</strong>
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background: #374151; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
          <p style="color: #9ca3af; margin: 0; font-size: 14px;">
            © 2024 Premium Kinoki Coffee for Men Kenya. All rights reserved.<br>
            <a href="#" style="color: #10b981; text-decoration: none;">Unsubscribe</a> | 
            <a href="#" style="color: #10b981; text-decoration: none;">Privacy Policy</a>
          </p>
        </div>
      </body>
    </html>
  `
}

export function generateAdminNotificationEmail(orderDetails: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Order Received - Premium Kinoki Coffee for Men</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #1f2937; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">🔔 New Order Received</h1>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #374151;">New Customer Order</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ef4444;">
            <h3 style="color: #ef4444; margin-top: 0;">Order Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Customer:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.customerName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.email || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Location:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.county}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Package:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.packageName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Quantity:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${orderDetails.quantity}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold;">Total Amount:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #059669; font-size: 18px;">KES ${orderDetails.totalAmount.toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-top: 20px; border: 1px solid #f59e0b;">
            <h4 style="color: #92400e; margin-top: 0;">⚡ Action Required</h4>
            <p style="color: #92400e; margin: 0;">
              Please contact the customer within 24 hours to confirm the order and arrange delivery.
            </p>
          </div>
        </div>
      </body>
    </html>
  `
}
