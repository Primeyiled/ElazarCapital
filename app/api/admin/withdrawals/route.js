import { authenticate } from '@/lib/middleware/auth';
import User from '@/lib/model/user';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect'; // Import dbConnect
import Withdraw from '@/lib/model/withdraw';

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

    const withdrawals = await Withdraw.find({});

    return NextResponse.json(
      { withdrawals },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fetch withdrawal error:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching withdrawals' },
      { status: 500 }
    );
  }
}