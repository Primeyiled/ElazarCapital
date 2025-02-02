// Import necessary modules and models
import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import User from "@/lib/model/user";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    // Authenticate the request
    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Extract the user ID from the params
    const { updateId } = await params;
      
    const updatedData = await req.json();  // Get the updated data from the request body

    await dbConnect();

    // Find the user by ID
    const user = await User.findById(updateId);

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Update the user with the new data
    Object.keys(updatedData).forEach(key => {
      if (updatedData[key] !== undefined) {
        user[key] = updatedData[key];  // Update only the provided fields
      }
    });

    // Save the updated user back to the database
    await user.save();

    // Return success response
    return NextResponse.json(
      { message: "User updated successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
