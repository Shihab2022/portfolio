/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { Resend } from "resend";
import { ContactFormData } from "../components/contact/contact-schema";

export async function sendEmail(params: ContactFormData) {
  try {
    // 1. Fetch keys from environment variables (handles both key conventions)
    const apiKey = process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_RECIPIENT_EMAIL;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable on server.");
      return { success: false, error: "Server Configuration Error: Missing API Key" };
    }

    if (!recipientEmail) {
      console.error("Missing CONTACT_RECIPIENT_EMAIL environment variable on server.");
      return { success: false, error: "Server Configuration Error: Missing Recipient Email" };
    }

    // 2. Instantiate Resend dynamically inside function execution
    const resend = new Resend(apiKey);

    const { name, email, company, subject, message } = params;

    if (!name || !email || !subject || !message) {
      return { success: false, error: "Missing required fields" };
    }

    const formattedCompany = company ? ` | ${company}` : "";
    const emailSubject = `📥 [Inquiry] ${subject} — ${name}${formattedCompany}`;

    const luxuryHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #0B0F19; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0B0F19; padding: 40px 10px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; background-color: #111827; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden;">
                <tr>
                  <td style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%); padding: 32px; text-align: left;">
                    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: rgba(255, 255, 255, 0.85); margin-bottom: 6px;">System Notification</div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #FFFFFF;">New Client Inquiry Received</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 32px;">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 20px;">
                      <tr>
                        <td style="padding-bottom: 12px; width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; display: block;">Full Name</span>
                          <strong style="font-size: 15px; color: #F8FAFC;">${name}</strong>
                        </td>
                        <td style="padding-bottom: 12px; width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; display: block;">Email Address</span>
                          <a href="mailto:${email}" style="font-size: 15px; color: #818CF8; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; display: block;">Company</span>
                          <strong style="font-size: 15px; color: #F8FAFC;">${company || "—"}</strong>
                        </td>
                        <td style="width: 50%;">
                          <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; display: block;">Subject</span>
                          <strong style="font-size: 15px; color: #F8FAFC;">${subject}</strong>
                        </td>
                      </tr>
                    </table>
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 11px; text-transform: uppercase; color: #94A3B8; display: block; margin-bottom: 8px;">Message Content</span>
                      <div style="background-color: rgba(0, 0, 0, 0.3); border-left: 3px solid #818CF8; padding: 20px; border-radius: 8px; color: #CBD5E1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                    </div>
                    
                    <!-- Direct Reply CTA Button inside the email -->
                    <div style="margin-top: 32px; text-align: center;">
                      <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}" style="display: inline-block; background-color: #6366F1; color: #FFFFFF; font-weight: 600; font-size: 14px; padding: 14px 28px; border-radius: 10px; text-decoration: none;">
                        Reply Directly to ${name}
                      </a>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email, // Direct reply to sender restored
      subject: emailSubject,
      html: luxuryHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Server Action Exception:", err);
    return { success: false, error: err?.message || "An unexpected error occurred." };
  }
}