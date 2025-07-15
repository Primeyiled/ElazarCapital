import { authenticate } from "@/lib/middleware/auth";
import Deposit from "@/lib/model/deposit";
import User from "@/lib/model/user";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import sendEmail from "@/lib/utils/sendEmail";

export async function PUT(req, { params }) {
  try {
    await dbConnect();

    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const authenticatedUser = await User.findById(userId).select("-password");

    if (!authenticatedUser || authenticatedUser.role !== 1) {
      return NextResponse.json(
        { message: "Forbidden: Only admins can access this endpoint" },
        { status: 403 }
      );
    }

    const { depositId } = await params;

    if (!depositId) {
      return NextResponse.json(
        { message: "Deposit ID is required" },
        { status: 400 }
      );
    }

    // Find the deposit
    const deposit = await Deposit.findById(depositId);

    if (!deposit) {
      return NextResponse.json(
        { message: "Deposit not found" },
        { status: 404 }
      );
    }

    if (deposit.status === "Declined") {
      return NextResponse.json(
        { message: "Deposit is already Declined" },
        { status: 400 }
      );
    }

    const user = await User.findById(deposit.user);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (deposit.status === "Approved") {
      user.totalInvest -= deposit.amount;
    }

    deposit.status = "Declined";
    await deposit.save();

    await user.save();

    const emailSubject = "Deposit Declined";
    const emailTextContent = `Your deposit of $${deposit.amount} has been declined.`;
    const emailHtmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Deposit Declined</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .header img {
          width: 70px;
          height: auto;
        }
        .content {
          margin-bottom: 20px;
        }
        .footer {
          text-align: center;
          font-size: 14px;
          color: #777;
        }
        hr {
          border: 0;
          height: 1px;
          background: #ddd;
          margin: 20px 0;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff !important;
          text-decoration: none;
          border-radius: 5px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img
            src="https://res.cloudinary.com/dcxfxfa52/image/upload/v1738674100/deposit_slips/ifzhr9kyxhio8zhabftc.png"
            alt="ElazarCapital Logo"
          />
        </div>
        <hr />
        <div class="content">
          <h2>Deposit Declined</h2>
          <p>Hello,</p>
          <p>We regret to inform you that your deposit of <strong>$${
            deposit.amount
          }</strong> has been declined.</p>
          <p><strong>Reason for Decline:</strong> ${
            deposit.declineReason || "Please contact support for more details."
          }</p>
          <p>If you believe this is an error or need further assistance, please reach out to our support team. We are here to help!</p>
          <p>Thank you for your understanding.</p>
          <a href="https://yourwebsite.com/contact-support" class="button">Contact Support</a>
        </div>
        <hr />
        <div class="footer">
          <p>Best regards,</p>
          <p><strong>ElazarCapital Team</strong></p>
          <p>Contact us: <a href="mailto:support@ElazarCapital.com">support@ElazarCapital.com</a></p>
        </div>
      </div>
    </body>
    </html>
    `;

    const emailSent = await sendEmail(
      user.email,
      emailSubject,
      emailTextContent,
      emailHtmlContent
    );

    if (!emailSent) {
      console.error("Failed to send email to user:", user.email);
    }

    return NextResponse.json(
      { message: "Deposit declined successfully", deposit },
      { status: 200 }
    );
  } catch (error) {
    console.error("Decline deposit error:", error);
    return NextResponse.json(
      { message: "An error occurred while declining the deposit" },
      { status: 500 }
    );
  }
}
