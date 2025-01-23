import { verifyToken } from '@/lib/utils/auth';

export const authenticate = async (req) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies.get('token')?.value || req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return { isAuthenticated: false };
    }

    // Verify the token
    const decoded = verifyToken(token);
    if (!decoded) {
      return { isAuthenticated: false };
    }

    // Return authentication details
    return { isAuthenticated: true, userId: decoded.userId, email: decoded.email };
  } catch (error) {
    console.error('Authentication error:', error);
    return { isAuthenticated: false };
  }
};