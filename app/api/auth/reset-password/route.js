import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { token, newPassword } = await req.json();

  if (!token || !newPassword) {
    return NextResponse.json(
      { message: "Token and new password are required" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const user = await User.findOne({ resetToken: token });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    if (new Date() > user.resetTokenExpires) {
      return NextResponse.json(
        { message: "Token has expired" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();

    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { message: "An error occurred while resetting the password" },
      { status: 500 }
    );
  }
}
