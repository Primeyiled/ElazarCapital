import nodemailer from "nodemailer";

const sendEmail = async (email, subject, textContent, htmlContent) => {
  try {
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

    const mailOptions = {
      from: process.env.USER,
      to: email,
      subject: `${subject}`,
      text: textContent,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending Email:", error);
    return false;
  }
};

export default sendEmail;