import { NextResponse } from "next/server";
import { authenticate } from '@/lib/middleware/auth'; // Adjust the import path as needed
 // Adjust the import path as needed
import dbConnect from '@/lib/dbConnect'; // Import your database connection utility
import Deposit from "@/lib/model/deposit";

export async function POST(request) {
  try {
    // Authenticate the user
    const authResult = await authenticate(request);
    if (!authResult.isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Parse the request body
    const { type, investment, plan, amount, wallet } = await request.json();

    // Validate required fields
    if (!type || !investment || !plan || !amount || !wallet) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Create a new deposit record
    const deposit = new Deposit({
      type,
      investment,
      plan,
      amount,
      wallet,
      user: authResult.userId, // Use the authenticated user's ID
    });

    // Save the deposit to the database
    await deposit.save();

    // Return success response
    return NextResponse.json(
      { success: true, message: "Deposit created successfully.", data: deposit },
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