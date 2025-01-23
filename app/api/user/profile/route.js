import { authenticate } from '@/lib/middleware/auth';
import User from '@/lib/model/user';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Authenticate the request
    const { isAuthenticated, userId } = await authenticate(req);

    if (!isAuthenticated) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch the user data from the database
    const user = await User.findById(userId).select('-password'); // Exclude password field

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Return user profile data
    return NextResponse.json(
      { profile: user },
      { status: 200 }
    );
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching the profile' },
      { status: 500 }
    );
  }
}