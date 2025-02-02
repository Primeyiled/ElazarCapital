// Import necessary modules and models
import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
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
    const { deleteId } = await params;


    // Connect to the database
    await dbConnect();

    // Find the user by ID
    const user = await User.findById(deleteId);

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  

    // Delete the user
    await User.findByIdAndDelete(deleteId);

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