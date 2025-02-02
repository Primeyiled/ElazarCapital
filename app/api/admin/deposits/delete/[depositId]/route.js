// Import necessary modules and models
import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import Deposit from "@/lib/model/deposit";
import User from "@/lib/model/user";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    // Authenticate the request
    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Extract the user ID from the params
    const { depositId } = await params;


    // Connect to the database
    await dbConnect();

    // Find the user by ID
    const deposit = await Deposit.findById(depositId);

    // Check if the user exists
    if (!deposit) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  

    // Delete the user
    await Deposit.findByIdAndDelete(depositId);

    // Return success response
    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}