import nodemailer from "nodemailer";

const sendOTP = async (email, otp) => {
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
      subject: "Swizzfunds OTP for Login",
      text: `Your OTP is: ${otp}`,
      html: `
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>One-Time Password (OTP)</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
              color: #333;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header img {
              width: 70px;
              height: auto;
            }
            h2 {
              color: #000000;
              font-size: 24px;
              margin: 20px 0;
              text-align: center;
            }
            p {
              font-size: 14px;
              line-height: 1.6;
              margin: 10px 0;
            }
            .otp {
              font-size: 32px;
              font-weight: bold;
              color: #007bff;
              text-align: center;
              margin: 20px 0;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #777;
              text-align: center;
            }
            .footer a {
              color: #000000;
              text-decoration: none;
            }
            .footer a:hover {
              text-decoration: underline;
            }
            hr {
              border: 0;
              height: 1px;
              background: #ddd;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <img
                src="https://res.cloudinary.com/dcxfxfa52/image/upload/v1738674100/deposit_slips/ifzhr9kyxhio8zhabftc.png"
                alt="Swizzfunds Logo"
              />
            </div>
            <hr />
            <p>Please use the following One-Time Password (OTP) to complete your login:</p>
            <h2 class="otp">${otp}</h2>
            <p>This OTP is valid for a limited time. Do not share it with anyone.</p>
            <div class="footer">
              <p>If you did not authorize this login attempt, please contact us immediately.</p>
              <p>Thank you for using our service!</p>
              <p><strong>Swizzfunds Team</strong></p>
              <p>Contact us: <a href="mailto:support@swizzfunds.com">support@swizzfunds.com</a></p>
             </div>
          </div>
        </body>
        </html>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return false;
  }
};

export default sendOTP;
