import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/lib/model/user';

export async function GET(req) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token');

  if (!token) {
    return NextResponse.json({ message: 'Token is required' }, { status: 400 });
  }

  try {
    await dbConnect();

    // Find the user by reset token
    const user = await User.findOne({ resetToken: token });

    if (!user) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    // Check if the token is expired
    if (new Date() > user.resetTokenExpires) {
      return NextResponse.json({ message: 'Token has expired' }, { status: 400 });
    }

    // Token is valid
    return NextResponse.json({ isValid: true });
  } catch (error) {
    console.error('Error validating token:', error);
    return NextResponse.json({ message: 'An error occurred while validating the token' }, { status: 500 });
  }
}
