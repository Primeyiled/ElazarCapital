import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

// Cache the connection to avoid reconnecting on every request
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  // If a connection already exists, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If a connection promise doesn't exist, create one
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 50000, // 50 seconds connection timeout
      socketTimeoutMS: 50000,  // 50 seconds socket timeout
      serverSelectionTimeoutMS: 50000, // 50 seconds server selection timeout
      keepAlive: true, // Enable keep-alive to prevent connection timeouts
      keepAliveInitialDelay: 300000, // 5 minutes keep-alive delay
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    }).catch((error) => {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('Failed to connect to database');
    });
  }

  try {
    // Wait for the connection promise to resolve
    cached.conn = await cached.promise;
  } catch (error) {
    // If the connection fails, reset the promise to allow retries
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default dbConnect;