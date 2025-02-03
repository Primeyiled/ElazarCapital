import { NextResponse } from "next/server";
import { authenticate } from "@/lib/middleware/auth"; // Adjust the import path as needed
import dbConnect from "@/lib/dbConnect"; // Import your database connection utility
import Deposit from "@/lib/model/deposit";
import cloudinary from "@/lib/cloudinary"; // Import Cloudinary configuration
import User from "@/lib/model/user";

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

    const user = await User.findById(authResult.userId).select("userName");
    
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
        { success: false, message: "Please provive your payment slip" },
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

      paymentSlipUrl = result.secure_url; // Get the URL of the uploaded file
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
