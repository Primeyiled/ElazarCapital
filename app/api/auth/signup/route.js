import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/lib/model/user";
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  const {
    fullName,
    userName,
    email,
    investment,
    address,
    referralCode,
    phoneNo,
    password,
  } = await req.json();

  // Validate required fields
  if (!fullName || !userName || !email || !investment || !password) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let referredByUser = null;
    if (referralCode) {
      referredByUser = await User.findOne({ referralCode });
      if (!referredByUser) {
        return NextResponse.json(
          { message: "Invalid referral code" },
          { status: 400 }
        );
      }

      if (referredByUser.email === email) {
        return NextResponse.json(
          { message: "You cannot refer yourself" },
          { status: 400 }
        );
      }
    }

    const newUserReferralCode = generateReferralCode();

    const newUser = new User({
      fullName,
      userName,
      email,
      investment,
      address,
      referralCode: newUserReferralCode,
      referredBy: referredByUser ? referredByUser.referralCode : null,
      phoneNo,
      password: hashedPassword,
    });

    await newUser.save();

    if (referredByUser) {
      referredByUser.referralCount += 1;
      await referredByUser.save();

      // referredByUser.refBonus += 10;
      // await referredByUser.save();
    }

    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user" },
      { status: 500 }
    );
  }
}


function generateReferralCode() {
  return uuidv4().replace(/-/g, '').substring(0, 8).toUpperCase();
}