import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import { NextResponse } from "next/server";
import crypto from "crypto";
import sendEmail from "@/lib/utils/sendEmail";

const generateResetLink = (resetToken) => {
  return `${process.env.NEXT_PUBLIC_BASE_URL}/password-reset?token=${resetToken}`;
};

const createPasswordResetEmailContent = (resetLink) => {
  const textContent = `You requested a password reset. Click the link below to reset your password:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.`;

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset</title>
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
        margin-bottom: 20px;
      }
      p {
        font-size: 14px;
        line-height: 1.6;
        margin: 10px 0;
      }
      .btn {
        display: inline-block;
        background-color: #000000;
        color: #ffffff !important;
        padding: 12px 24px;
        text-decoration: none;
        border-radius: 5px;
        font-size: 14px;
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
      <h2>Hello!</h2>
      <p>You requested a password reset. Click the button below to reset your password:</p>
      <p><a href="${resetLink}" class="btn">Reset Password</a></p>
      <p>If the button above doesn't work, copy and paste the entire URL into your browser:</p>
      <p><a href="${resetLink}" style="color: #007bff; text-decoration: none;">${resetLink}</a></p>
      <p>If you did not request this, please ignore this email.</p>
      <div class="footer">
        <p>Thank you for using our service!</p>
        <p><strong>Swizzfunds Team</strong></p>
        <p>Contact us: <a href="mailto:support@swizzfunds.com">support@swizzfunds.com</a></p>
      </div>
    </div>
  </body>
  </html>
`;

  return { textContent, htmlContent };
};

export async function POST(req) {
  const { email } = await req.json();

  try {
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await dbConnect();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "No user found with this email" },
        { status: 404 }
      );
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpires = new Date(Date.now() + 3600000);

    user.resetToken = resetToken;
    user.resetTokenExpires = resetTokenExpires;
    await user.save();

    const resetLink = generateResetLink(resetToken);

    const { textContent, htmlContent } =
      createPasswordResetEmailContent(resetLink);

    const emailSent = await sendEmail(
      email,
      "Password Reset Request",
      textContent,
      htmlContent
    );

    if (!emailSent) {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Password reset email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Password reset error:", error);
    return NextResponse.json(
      { message: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
