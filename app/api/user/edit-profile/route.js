import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import { authenticate } from "@/lib/middleware/auth";

export async function PUT(req) {
  const { userName, email, investment, address, phoneNo } = await req.json();

  try {

    const authResult = await authenticate(req);
    if (!authResult.isAuthenticated) {
      return NextResponse.json(
        { success: false, message: "Unauthorized." },
        { status: 401 }
      );
    }

    const id = authResult.userId;

    await dbConnect();

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { userName, email, investment, address, phoneNo },
      { new: true } 
    );

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, message: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Profile updated successfully!",
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while updating the profile.",
      },
      { status: 500 }
    );
  }
}