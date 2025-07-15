import { NextResponse } from "next/server";
import { authenticate } from "@/lib/middleware/auth";
import dbConnect from "@/lib/dbConnect";
import Deposit from "@/lib/model/deposit";
import cloudinary from "@/lib/cloudinary";
import User from "@/lib/model/user";
import sendEmail from "@/lib/utils/sendEmail";

export const config = {
  api: {
    bodyParser: false,
  },
};

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

    const user = await User.findById(authResult.userId).select(
      "userName email"
    );
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found." },
        { status: 404 }
      );
    }

    const formData = await request.formData();

    const type = formData.get("type");
    const investment = formData.get("investment");
    const plan = formData.get("plan");
    const amount = formData.get("amount");
    const wallet = formData.get("wallet");
    const paymentSlip = formData.get("paymentSlip");

    if (!type || !investment || !plan || !amount || !wallet) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }
    if (!paymentSlip) {
      return NextResponse.json(
        { success: false, message: "Please provide your payment slip." },
        { status: 400 }
      );
    }

    let paymentSlipUrl = null;
    if (paymentSlip) {
      const fileBuffer = await paymentSlip.arrayBuffer();

      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "auto",
              folder: "deposit_slips",
            },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            }
          )
          .end(Buffer.from(fileBuffer));
      });

      paymentSlipUrl = result.secure_url;
    }

    const deposit = new Deposit({
      type,
      investment,
      plan,
      amount,
      wallet,
      paymentSlip: paymentSlipUrl,
      user: authResult.userId,
      userName: user.userName,
    });

    await deposit.save();

    // Send email to the user
    const userEmailSubject = "Deposit Request Submitted";
    const userEmailTextContent = `Dear ${user.userName},\n\nYour deposit request of $${amount} has been successfully submitted. We will notify you once it is approved.\n\nThank you for choosing ElazarCapital!`;
    const userEmailHtmlContent = `
      <div>
      <div class="header">
          <img
            src="https://res.cloudinary.com/dcxfxfa52/image/upload/v1738674100/deposit_slips/ifzhr9kyxhio8zhabftc.png"
            alt="ElazarCapital Logo"
          />
        </div>
        <hr />
        <p>Dear ${user.userName},</p>
        <p>Your deposit request of <strong>$${amount}</strong> has been successfully submitted. We will notify you once it is approved.</p>
        <p>Thank you for choosing ElazarCapital!</p>
        <p>Best regards,</p>
        <p><strong>ElazarCapital Team</strong></p>
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
    const adminEmailSubject = "New Deposit Request";
    const adminEmailTextContent = `A new deposit request has been submitted by ${user.userName} (${user.email}) for $${amount}. Please review it in the admin panel.`;
    const adminEmailHtmlContent = `
      <div>
        <p>A new deposit request has been submitted:</p>
        <ul>
          <li><strong>User:</strong> ${user.userName} (${user.email})</li>
          <li><strong>Amount:</strong> $${amount}</li>
          <li><strong>Plan:</strong> ${plan}</li>
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
        message: "Deposit created successfully.",
        data: deposit,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating deposit:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
