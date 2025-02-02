import { authenticate } from '@/lib/middleware/auth';
import Deposit from '@/lib/model/deposit';
import User from '@/lib/model/user';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect'; // Import dbConnect

export async function GET(req) {

  try {
    await dbConnect();

    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const authenticatedUser = await User.findById(userId).select('-password');

    if (!authenticatedUser || authenticatedUser.role !== 1) {
      return NextResponse.json(
        { message: 'Forbidden: Only admins can access this endpoint' },
        { status: 403 }
      );
    }

    const deposits = await Deposit.find({});

    return NextResponse.json(
      { deposits },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fetch deposits error:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching deposits' },
      { status: 500 }
    );
  }
}