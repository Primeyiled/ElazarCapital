import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/utils/auth";
import { NextResponse } from "next/server";
import sendOTP from "@/lib/utils/sendOTP";

export async function POST(req) {
  const { email, password, otp } = await req.json();

  try {
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    await dbConnect();
    const generateOTP = () => {
      return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    if (!otp) {
      const otp = generateOTP();
      user.otp = otp;
      user.otpExpires = new Date(Date.now() + 10 * 60000);
      await user.save();

      await sendOTP(email, otp);

      return NextResponse.json(
        { message: "OTP sent to your email" },
        { status: 200 }
      );
    } else {
      if (user.otp !== otp || user.otpExpires < new Date()) {
        return NextResponse.json(
          { message: "Invalid or expired OTP" },
          { status: 401 }
        );
      }

      user.otp = undefined;
      user.otpExpires = undefined;
      await user.save();

      const token = generateToken(user._id, user.email);

      const response = NextResponse.json(
        { message: "Login successful", profile: user },
        { status: 200 }
      );

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400,
        path: "/",
        sameSite: "strict",
      });

      return response;
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "An error occurred while logging in" },
      { status: 500 }
    );
  }
}
