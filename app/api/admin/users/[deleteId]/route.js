// Import necessary modules and models
import dbConnect from "@/lib/dbConnect";
import { authenticate } from "@/lib/middleware/auth";
import User from "@/lib/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

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


export async function POST(req, { params }) {
  const { deleteId } = await params;

  try {
    await dbConnect();

    const { isAuthenticated, userId } = await authenticate(req);
    if (!isAuthenticated) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const admin = await User.findById(userId);
    if (!admin || admin.role !== 1) {
      return NextResponse.json(
        { message: 'Forbidden: Admin access only' },
        { status: 403 }
      );
    }

    const user = await User.findById(deleteId);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Generate random temp password
    const tempPassword = Math.random().toString(36).slice(-8); // e.g. "x83ksl1q"
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    user.password = hashedPassword;
    user.tempPasswordActive = true;
    await user.save();

    return NextResponse.json(
      {
        message: 'Temporary password generated successfully.',
        tempPassword,
        userId: user._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Temp password error:', error);
    return NextResponse.json(
      { message: 'An error occurred while generating temp password' },
      { status: 500 }
    );
  }
}
