import nodemailer from "nodemailer";

export async function sendmail({ to, name, subject, body, attachments }) {
  const transporter = nodemailer.createTransport({
    host: "mail.spmedifort.com", // commonly mail.yourdomain.com
    port: 465, 
    secure: true, 
    auth: {
      user: "lead@spmedifort.com",
      pass: "lead@143@143",
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    return { success: false, error: "Transporter verification failed", details: error };
  }

  try {
    await transporter.sendMail({
      from: `"Lead | Spmedifort" <lead@spmedifort.com>`,
      to,
      subject,
      html: body,
      attachments: attachments?.length ? attachments : undefined,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: "Email sending failed", details: error };
  }
}
