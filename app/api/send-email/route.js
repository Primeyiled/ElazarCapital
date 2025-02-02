import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, subject, text } = req.body;

  // Create a transporter using Zoho SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465, // Use 587 for TLS
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.ZOHO_EMAIL, // Your Zoho email
      pass: process.env.ZOHO_PASSWORD, // Your Zoho password or app password
    },
  });

  try {
    // Send mail
    await transporter.sendMail({
      from: `"Your Name" <${process.env.ZOHO_EMAIL}>`,
      to,
      subject,
      text,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}