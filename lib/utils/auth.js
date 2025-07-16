import jwt from 'jsonwebtoken';
import User from "@/lib/model/user";

/**
 * Generates a JWT token for a user.
 * @param {string} userId - The user's unique ID.
 * @param {string} email - The user's email.
 * @returns {string} - The generated JWT token.
 * @param {NextRequest} req - The request object (e.g. from Next.js middleware or API route).
 * @returns {Promise<User|null>}
 */
export const generateToken = (userId, email) => {
  if (!userId || !email) {
    throw new Error('userId and email are required to generate a token');
  }

  return jwt.sign(
    { userId, email }, // Payload
    process.env.JWT_SECRET, // Secret key (stored in environment variables)
    { expiresIn: '24h' } // Token expiration
  );
};

/**
 * Verifies a JWT token and returns the decoded payload.
 * @param {string} token - The JWT token to verify.
 * @returns {object|null} - The decoded payload if verification succeeds, otherwise null.
 */
export const verifyToken = (token) => {
  if (!token) {
    return null; // No token provided
  }

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('Token verification error:', error);
    return null; // Return null if verification fails
  }
};

export async function getUserFromToken(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    return await User.findById(userId);
  } catch (err) {
    console.error("Token decode error:", err);
    return null;
  }
}