import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phoneNo, message } = req.body;

    // Validate the input
    if (!name || !email || !phoneNo || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 25,
      secure: false,
      logger: true,
      debug: true,
      ignoreTLS: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.USER,
      to: process.env.USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNo}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNo}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      // Send the email
      await transporter.sendEmail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send message." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}