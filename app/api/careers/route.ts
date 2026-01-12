import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string || '';
    const portfolio = formData.get('portfolio') as string || '';
    const coverLetter = formData.get('coverLetter') as string || '';
    const positionTitle = formData.get('positionTitle') as string;
    const department = formData.get('department') as string || '';
    const location = formData.get('location') as string || '';
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !positionTitle) {
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

    // Prepare attachments array
    const attachments: any[] = [];

    if (resumeFile && resumeFile.size > 0) {
      // Validate file size on server (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (resumeFile.size > maxSize) {
        return NextResponse.json(
          { error: 'File size exceeds 5MB limit. Please upload a smaller file.' },
          { status: 400 }
        );
      }

      try {
        const bytes = await resumeFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Get file extension
        const fileName = resumeFile.name || 'resume.pdf';
        const fileExtension = fileName.split('.').pop()?.toLowerCase() || 'pdf';

        // Determine content type based on extension
        let contentType = resumeFile.type || 'application/pdf';
        if (!resumeFile.type) {
          if (fileExtension === 'pdf') {
            contentType = 'application/pdf';
          } else if (fileExtension === 'doc') {
            contentType = 'application/msword';
          } else if (fileExtension === 'docx') {
            contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          }
        }

        attachments.push({
          filename: fileName,
          content: buffer,
          contentType: contentType,
        });

        console.log(`Resume file attached: ${fileName}, Size: ${resumeFile.size} bytes, Type: ${contentType}`);
      } catch (error) {
        console.error('Error processing resume file:', error);
        // Continue without attachment if file processing fails
      }
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
      subject: `Job Application: ${positionTitle} - ${firstName} ${lastName}`,
      attachments: attachments,
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
                        💼 New Job Application
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px; font-weight: 400;">
                        You have received a new job application from your website
                      </p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <!-- Position Badge -->
                      <div style="background-color: #f0f4ff; border-left: 4px solid #0C2C8A; padding: 12px 16px; border-radius: 6px; margin-bottom: 30px;">
                        <p style="margin: 0; color: #0C2C8A; font-size: 16px; font-weight: 600;">
                          ${positionTitle}
                        </p>
                        ${department || location ? `
                        <p style="margin: 8px 0 0 0; color: #64748b; font-size: 13px;">
                          ${department ? `${department}` : ''}${department && location ? ' • ' : ''}${location ? location : ''}
                        </p>
                        ` : ''}
                      </div>

                      <!-- Applicant Information -->
                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; margin-bottom: 25px; border: 1px solid #e2e8f0;">
                        <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                          <span style="display: inline-block; width: 4px; height: 20px; background-color: #0C2C8A; margin-right: 12px; border-radius: 2px;"></span>
                          Applicant Information
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
                                    <span style="color: #1e293b; font-size: 15px; font-weight: 500;">${firstName} ${lastName}</span>
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
                                    <a href="mailto:${email}" style="color: #0C2C8A; font-size: 15px; font-weight: 500; text-decoration: none;">${email}</a>
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
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</strong>
                                  </td>
                                  <td>
                                    <a href="tel:${phone}" style="color: #0C2C8A; font-size: 15px; font-weight: 500; text-decoration: none;">${phone}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>

                          ${linkedin ? `
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="140" style="padding-right: 15px;">
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">LinkedIn</strong>
                                  </td>
                                  <td>
                                    <a href="${linkedin}" target="_blank" style="color: #0C2C8A; font-size: 15px; font-weight: 500; text-decoration: none;">${linkedin}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ` : ''}

                          ${portfolio ? `
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="140" style="padding-right: 15px;">
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Portfolio</strong>
                                  </td>
                                  <td>
                                    <a href="${portfolio}" target="_blank" style="color: #0C2C8A; font-size: 15px; font-weight: 500; text-decoration: none;">${portfolio}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ` : ''}

                          ${resumeFile && resumeFile.size > 0 ? `
                          <tr>
                            <td style="padding: 12px 0;">
                              <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                  <td width="140" style="padding-right: 15px;">
                                    <strong style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Resume/CV</strong>
                                  </td>
                                  <td>
                                    <span style="color: #1e293b; font-size: 15px; font-weight: 500;">${resumeFile.name.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>
                                    <br />
                                    <small style="color: #10b981; font-size: 12px; font-weight: 500;">✓ Resume attached to this email</small>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                      </div>

                      ${coverLetter ? `
                      <!-- Cover Letter Section -->
                      <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; border: 1px solid #e2e8f0;">
                        <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                          <span style="display: inline-block; width: 4px; height: 20px; background-color: #0C2C8A; margin-right: 12px; border-radius: 2px;"></span>
                          Cover Letter
                        </h2>
                        <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; border-left: 3px solid #0C2C8A;">
                          <p style="margin: 0; color: #475569; font-size: 15px; line-height: 1.7; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${coverLetter}</p>
                        </div>
                      </div>
                      ` : ''}
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8fafc; padding: 25px 30px; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.6;">
                        This email was automatically generated from your website careers page<br>
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
New Job Application

Position Applied For:
- Job Title: ${positionTitle}
${department ? `- Department: ${department}` : ''}
${location ? `- Location: ${location}` : ''}

Applicant Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
${linkedin ? `- LinkedIn: ${linkedin}` : ''}
${portfolio ? `- Portfolio/Website: ${portfolio}` : ''}
${resumeFile && resumeFile.size > 0 ? `- Resume/CV: ${resumeFile.name} (attached to email)` : ''}

${coverLetter ? `
Cover Letter:
${coverLetter}
` : ''}

---
This job application was submitted from your website careers page at ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Application submitted successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending careers application email:', error);

    // Provide more specific error messages
    let errorMessage = 'Failed to submit application. Please try again later.';
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
