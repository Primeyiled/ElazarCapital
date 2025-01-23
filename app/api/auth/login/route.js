import dbConnect from '@/lib/dbConnect';
import User from '@/lib/model/user';
import bcrypt from 'bcryptjs';
import { generateToken } from '@/lib/utils/auth';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Establish database connection
    await dbConnect();

    // Look for the user in the database
    const user = await User.findOne({ email }).select('+password'); // Explicitly select password field
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid credentials' }, // Generic message for security
        { status: 401 }
      );
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' }, // Generic message for security
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user._id, user.email);

    // Respond with success and set the token in the cookies
    const response = NextResponse.json(
      { message: 'Login successful' },
      { status: 200 }
    );

    response.cookies.set('token', token, {
      httpOnly: true, // Prevent client-side JavaScript access
      secure: process.env.NODE_ENV === 'production', // Ensure cookies are only sent over HTTPS in production
      maxAge: 3600, // 1 hour expiration
      path: '/', // Make the cookie available across the entire site
      sameSite: 'strict', // Prevent CSRF attacks
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An error occurred while logging in' },
      { status: 500 }
    );
  }
}