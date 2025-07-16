import { NextResponse } from "next/server";
import { authenticate } from "@/lib/middleware/auth";
import dbConnect from "@/lib/dbConnect";
import Withdraw from "@/lib/model/withdraw";
import User from "@/lib/model/user";
import sendEmail from "@/lib/utils/sendEmail"; // Import the sendEmail function

export async function POST(request) {
  try {
    await dbConnect();

    const authResult = await authenticate(request);
    if (!authResult.isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please log in to continue." },
        { status: 401 }
      );
    }

    const { type, amount, wallet } = await request.json();

    if (!type || !amount || !wallet) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const user = await User.findById(authResult.userId).select(
      "userName email totalProfit"
    );
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found." },
        { status: 404 }
      );
    }

    if (amount > user.totalProfit) {
      return NextResponse.json(
        { success: false, message: "Insufficient funds." },
        { status: 400 }
      );
    }

    const withdrawal = new Withdraw({
      type,
      amount,
      wallet,
      user: authResult.userId,
      userName: user.userName,
    });

    await withdrawal.save();

    // Send email to the user
    const userEmailSubject = "Withdrawal Request Submitted";
    const userEmailTextContent = `Dear ${user.userName},\n\nYour withdrawal request of $${amount} has been successfully submitted. Processing may take up to 24 hours.\n\nThank you for choosing ElazarCapital!`;
    const userEmailHtmlContent = `
  <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
    <div class="header" style="text-align: center; padding: 20px 0;">
  <img 
    src="https://res.cloudinary.com/dff9xwtjc/image/upload/v1752631553/logo_vvkbds.png" 
    alt="ElazarCapital Logo" 
    width="100" height="auto"
    style="display: block; margin: 0 auto; max-width: 100px; height: auto;"
  />
</div>
    <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 0 20px;">
    <div style="padding: 20px;">
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">Dear ${
        user.userName
      },</p>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        Your withdrawal request of <strong style="color: #4a6bdf;">$${amount}</strong> 
        has been successfully submitted. Processing may take up to 24 hours.
      </p>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        <span style="color: #d35400; font-weight: bold;">Important:</span> 
        For security reasons, please verify this transaction if you receive any confirmation requests.
      </p>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">Thank you for choosing ElazarCapital!</p>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 5px;">Best regards,</p>
      <p style="font-size: 16px; line-height: 1.6;">
        <strong style="color: #4a6bdf;">ElazarCapital Team</strong>
      </p>
    </div>
    <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 14px; color: #666;">
      <p style="margin: 0;">© ${new Date().getFullYear()} ElazarCapital. All rights reserved.</p>
    </div>
  </div>
`;

    await sendEmail(
      user.email,
      userEmailSubject,
      userEmailTextContent,
      userEmailHtmlContent
    );

    // Send email to the admin
    const adminEmail = "admin@ElazarCapital.com"; // Replace with the admin's email
    const adminEmailSubject = "New Withdrawal Request";
    const adminEmailTextContent = `A new withdrawal request has been submitted by ${user.userName} (${user.email}) for $${amount}. Please review it in the admin panel.`;
    const adminEmailHtmlContent = `
      <div>
        <p>A new withdrawal request has been submitted:</p>
        <ul>
          <li><strong>User:</strong> ${user.userName} (${user.email})</li>
          <li><strong>Amount:</strong> $${amount}</li>
          <li><strong>Wallet:</strong> ${wallet}</li>
        </ul>
        <p>Please review it in the admin panel.</p>
        <p>Best regards,</p>
        <p><strong>ElazarCapital Team</strong></p>
      </div>
    `;

    await sendEmail(
      adminEmail,
      adminEmailSubject,
      adminEmailTextContent,
      adminEmailHtmlContent
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Withdrawal request created successfully. Processing may take up to 24 hours.",
        data: withdrawal,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating withdrawal:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
