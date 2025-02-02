import { authenticate } from '@/lib/middleware/auth';
import User from '@/lib/model/user';
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    // Authenticate the request
    const { isAuthenticated, userId } = await authenticate(req);

    // Check if the user is authenticated and is an admin
    if (!isAuthenticated) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch the authenticated user to check if they are an admin
    const authenticatedUser = await User.findById(userId).select('-password');

    if (!authenticatedUser || !authenticatedUser.role === 1) {
      return NextResponse.json(
        { message: 'Forbidden: Only admins can access this endpoint' },
        { status: 403 }
      );
    }

    // Fetch all users from the database (excluding passwords)
    const users = await User.find({}).select('-password');

    // Return the list of users
    return NextResponse.json(
      { users },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fetch users error:', error);
    return NextResponse.json(
      { message: 'An error occurred while fetching users' },
      { status: 500 }
    );
  }
}