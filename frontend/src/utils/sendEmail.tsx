"use server";

import { Resend } from "resend";
import { ContactFormData } from "../components/contact/contact-schema";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(params: ContactFormData) {
  try {
    const { name, email, company, subject, message } = params;

    if (!name || !email || !subject || !message) {
      return { success: false, error: "Missing required fields" };
    }

    // Format custom luxury subject line with sender name and optional company name
    const formattedCompany = company ? ` | ${company}` : "";
    const emailSubject = `📥 [Inquiry] ${subject} — ${name}${formattedCompany}`;

    // Responsive Luxury Dark-Mode Email Template
    const luxuryHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0B0F19; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0B0F19; padding: 40px 10px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background-color: #111827; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
                
                <!-- Header Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%); padding: 32px; text-align: left;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255, 255, 255, 0.85); margin-bottom: 6px;">
                      System Notification
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
                      New Client Inquiry Received
                    </h1>
                  </td>
                </tr>

                <!-- Content Body -->
                <tr>
                  <td style="padding: 32px;">
                    
                    <!-- Sender Info Grid -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 20px;">
                      <tr>
                        <td style="padding-bottom: 12px; width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; color: #94A3B8; display: block; margin-bottom: 4px;">Full Name</span>
                          <strong style="font-size: 15px; color: #F8FAFC; font-weight: 600;">${name}</strong>
                        </td>
                        <td style="padding-bottom: 12px; width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; color: #94A3B8; display: block; margin-bottom: 4px;">Email Address</span>
                          <a href="mailto:${email}" style="font-size: 15px; color: #818CF8; text-decoration: none; font-weight: 600;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; color: #94A3B8; display: block; margin-bottom: 4px;">Company</span>
                          <strong style="font-size: 15px; color: #F8FAFC; font-weight: 600;">${company || "—"}</strong>
                        </td>
                        <td style="width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; color: #94A3B8; display: block; margin-bottom: 4px;">Subject</span>
                          <strong style="font-size: 15px; color: #F8FAFC; font-weight: 600;">${subject}</strong>
                        </td>
                      </tr>
                    </table>

                    <!-- Message Body -->
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 11px; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; color: #94A3B8; display: block; margin-bottom: 8px;">Message Content</span>
                      <div style="background-color: rgba(0, 0, 0, 0.3); border-left: 3px solid #818CF8; padding: 20px; border-radius: 8px; color: #CBD5E1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                    </div>

                    <!-- Direct Reply Button -->
                    <div style="margin-top: 32px; text-align: center;">
                      <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}" style="display: inline-block; background-color: #6366F1; color: #FFFFFF; font-weight: 600; font-size: 14px; padding: 14px 28px; border-radius: 10px; text-decoration: none; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);">
                        Reply Directly to Sender
                      </a>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 32px; background-color: rgba(0, 0, 0, 0.2); border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #64748B;">
                      Automated Contact Form System
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.NEXT_PUBLIC_CONTACT_RECIPIENT_EMAIL!],
      replyTo: email,
      subject: emailSubject,
      html: luxuryHtml,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
