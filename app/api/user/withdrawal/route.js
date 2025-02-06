import { NextResponse } from "next/server";
import { authenticate } from '@/lib/middleware/auth';
import dbConnect from '@/lib/dbConnect';
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

    const user = await User.findById(authResult.userId).select("userName email totalProfit");
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
    const userEmailTextContent = `Dear ${user.userName},\n\nYour withdrawal request of $${amount} has been successfully submitted. Processing may take up to 24 hours.\n\nThank you for choosing Swizzfunds!`;
    const userEmailHtmlContent = `
      <div>
      <div class="header">
          <img
            src="https://res.cloudinary.com/dcxfxfa52/image/upload/v1738674100/deposit_slips/ifzhr9kyxhio8zhabftc.png"
            alt="Swizzfunds Logo"
          />
        </div>
        <hr />
        <p>Dear ${user.userName},</p>
        <p>Your withdrawal request of <strong>$${amount}</strong> has been successfully submitted. Processing may take up to 24 hours.</p>
        <p>Thank you for choosing Swizzfunds!</p>
        <p>Best regards,</p>
        <p><strong>Swizzfunds Team</strong></p>
      </div>
    `;

    await sendEmail(user.email, userEmailSubject, userEmailTextContent, userEmailHtmlContent);

    // Send email to the admin
    const adminEmail = "admin@swizzfunds.com"; // Replace with the admin's email
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
        <p><strong>Swizzfunds Team</strong></p>
      </div>
    `;

    await sendEmail(adminEmail, adminEmailSubject, adminEmailTextContent, adminEmailHtmlContent);

    return NextResponse.json(
      {
        success: true,
        message: "Withdrawal request created successfully. Processing may take up to 24 hours.",
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