import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/lib/model/user';

export async function POST(req) {
  const { fullName, userName, email, investment, address, referral, phoneNo, password } = await req.json();

  // Validate required fields
  if (!fullName || !userName || !email || !investment || !password) {
    return NextResponse.json(
      { message: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    // Establish database connection
    await dbConnect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 409 } // 409 Conflict is more appropriate for duplicate resources
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      userName,
      email,
      investment,
      address,
      referral,
      phoneNo,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Return success response
    return NextResponse.json(
      { message: 'User registered successfully!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'An error occurred while registering the user' },
      { status: 500 }
    );
  }
}