import { NextResponse } from "next/server";
import { authenticate } from '@/lib/middleware/auth';
import dbConnect from '@/lib/dbConnect';
import Withdraw from "@/lib/model/withdraw";
import User from "@/lib/model/user"; 

export async function POST(request) {
  try {
    // Authenticate the user
    const authResult = await authenticate(request);
    if (!authResult.isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please log in to continue." },
        { status: 401 }
      );
    }

    await dbConnect();

    const { type, amount, wallet } = await request.json();
    

    if (!type || !amount || !wallet) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const user = await User.findById(authResult.userId);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found." },
        { status: 404 }
      );
    }

    if (amount > user.totalAmount) {
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
    });

    // Save the withdrawal to the database
    await withdrawal.save();

    // Return success response
    return NextResponse.json(
      { success: true, message: "Withdrawal request created successfully. Processing may take up to 24 hours.", data: withdrawal },
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