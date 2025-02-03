import { authenticate } from '@/lib/middleware/auth';
import User from '@/lib/model/user';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Withdraw from '@/lib/model/withdraw';

export async function PUT(req, { params }) {
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

    const { withdrawalId } = await params;


    if (!withdrawalId) {
      return NextResponse.json(
        { message: 'Withdrawal ID is required' },
        { status: 400 }
      );
    }

    const withdrawal = await Withdraw.findById(withdrawalId);

    if (!withdrawal) {
      return NextResponse.json(
        { message: 'Withdrawal not found' },
        { status: 404 }
      );
    }

    if (withdrawal.status === 'Approved') {
      return NextResponse.json(
        { message: 'Withdrawal is already Approved' },
        { status: 400 }
      );
    }    

    const user = await User.findById(withdrawal.user);

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    if (withdrawal.status === 'Declined') {
      user.totalInvest -= withdrawal.amount;
    }
    
    if (withdrawal.status === 'Pending') {
      user.totalInvest -= withdrawal.amount;
    }

    withdrawal.status = 'Approved';
    await withdrawal.save();
    await user.save();

    return NextResponse.json(
      { message: 'Withdrawal approved successfully', withdrawal },
      { status: 200 }
    );
  } catch (error) {
    console.error('Approve withdrawal error:', error);
    return NextResponse.json(
      { message: 'An error occurred while approving the withdrawal' },
      { status: 500 }
    );
  }
}