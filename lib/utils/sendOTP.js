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
      subject: "Your OTP for Login",
      text: `Your OTP is: ${otp}`,
      html: `
         <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f4f4f4;
      }
      .email-container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #192626;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .otp {
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
        margin-top: 10px;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #f5f5f5;
        margin-top: 20px;
      }
      .footer a {
        color: #e2e2e2; /* Same primary color */
        text-decoration: none;
      }
      .text {
        color: white;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:30px 0;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <img
          src="https://res.cloudinary.com/dcxfxfa52/image/upload/v1738674100/deposit_slips/ifzhr9kyxhio8zhabftc.png"
          alt="Swizzfunds Logo"
          width="70"
        />
        <p class="text">Login OTP</p>
      </div>
      <hr>
      <p class="text">Please use the following One-Time Password (OTP) to complete your login.</p>
      <p class="text">Your One Time Password: <span class="otp">${otp}</span></p>
      <div class="footer">
        <p>If you did not authorize this login attempt, please contact us immediately.</p>
        <p>Thank you for using our service!</p>
        <p>Swizzfunds Team</p>
      </div>
    </div>
  </body>
</html>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("OTP sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending OTP:", error);
    return false;
  }
};

export default sendOTP;
