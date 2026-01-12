import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration: GMAIL_USER or GMAIL_APP_PASSWORD not set');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission - ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f7fa;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f7fa; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0C2C8A 0%, #1a4dcc 100%); padding: 40px 30px; text-align: center;">
                      <div style="margin-bottom: 20px;">
                        <img src="https://zapeera.com/logos.png" alt="Zapeera Logo" style="height: 50px; width: auto; max-width: 200px;" />
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        📧 New Contact Form Submission
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px; font-weight: 400;">
                        You have received a new inquiry from your website
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <!-- Subject Badge -->
                      <div style="background-color: #f0f4ff; border-left: 4px solid #0C2C8A; padding: 12px 16px; border-radius: 6px; margin-bottom: 30px;">
                        <p style="margin: 0; color: #0C2C8A; font-size: 16px; font-weight: 600;">
                          ${subject}
                        </p>
                      </div>

                      <!-- Contact Information -->
                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; margin-bottom: 25px; border: 1px solid #e2e8f0;">
                        <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                          <span style="display: inline-block; width: 4px; height: 20px; background-color: #0C2C8A; margin-right: 12px; border-radius: 2px;"></span>
                          Contact Information
                        </h2>

                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="140" style="padding-right: 15px;">
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong>
                                  </td>
                                  <td>
                                    <span style="color: #1e293b; font-size: 15px; font-weight: 500;">${name}</span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="140" style="padding-right: 15px;">
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
                                  </td>
                                  <td>
                                    <a href="mailto:${email}" style="color: #0C2C8A; font-size: 15px; font-weight: 500; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s;">${email}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          ${phone ? `
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="140" style="padding-right: 15px;">
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</strong>
                                  </td>
                                  <td>
                                    <a href="tel:${phone}" style="color: #0C2C8A; font-size: 15px; font-weight: 500; text-decoration: none;">${phone}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ` : ''}

                          ${company ? `
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="140" style="padding-right: 15px;">
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Company</strong>
                                  </td>
                                  <td>
                                    <span style="color: #1e293b; font-size: 15px; font-weight: 500;">${company}</span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                      </div>

                      <!-- Message Section -->
                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; border: 1px solid #e2e8f0;">
                        <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                          <span style="display: inline-block; width: 4px; height: 20px; background-color: #0C2C8A; margin-right: 12px; border-radius: 2px;"></span>
                          Message
                        </h2>
                        <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border-left: 3px solid #0C2C8A;">
                          <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.7; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${message}</p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.6;">
                        This email was automatically generated from your website contact form<br>
                        <span style="color: #94a3b8;">Submitted on ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}</span>
                      </p>
                      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                        <div style="margin-bottom: 12px;">
                          <img src="https://zapeera.com/logos.png" alt="Zapeera Logo" style="height: 35px; width: auto; max-width: 150px;" />
                        </div>
                        <p style="margin: 0; color: #0C2C8A; font-size: 14px; font-weight: 600;">
                          Zapeera - Unified Business Management Solutions
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Contact Details:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
${phone ? `- Phone: ${phone}` : ''}
- Subject: ${subject}

Message:
${message}

---
This email was sent from your website contact form at ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending contact form email:', error);

    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please contact support.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection error. Please try again later.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
