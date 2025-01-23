import jwt from 'jsonwebtoken';

/**
 * Generates a JWT token for a user.
 * @param {string} userId - The user's unique ID.
 * @param {string} email - The user's email.
 * @returns {string} - The generated JWT token.
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