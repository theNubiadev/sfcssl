import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // true for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, service, message } =
      await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }
    await transporter.sendMail({
      from: `"SF Care Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `New Enquiry — ${service || "General"} | ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;color:#1a1a1a;">
          <div style="background:#0f1f3d;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h2 style="color:#f5d97a;margin:0;font-size:1.2rem;">
              New Contact Form Submission
            </h2>
          </div>
          <div style="border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:28px 32px;">
            <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;width:140px;">Name</td>
                <td style="padding:8px 0;font-weight:600;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;">Email</td>
                <td style="padding:8px 0;">
                  <a href="mailto:${email}" style="color:#c8920a;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;">Phone</td>
                <td style="padding:8px 0;">${phone || "—"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;">Service</td>
                <td style="padding:8px 0;">${service || "—"}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
            <p style="color:#6b7280;font-size:0.85rem;margin:0 0 8px;">Message</p>
            <p style="background:#f9fafb;padding:16px;border-radius:6px;margin:0;line-height:1.7;">
              ${message.replace(/\n/g, "<br/>")}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}