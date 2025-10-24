import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  // Check if we already have a cached connection
  if (cached.conn) {
    return cached.conn;
  }

  // Check if mongoose already has an active connection
  if (mongoose.connection.readyState === 1) {
    cached.conn = mongoose.connection;
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 2,
      maxIdleTimeMS: 30000,
      connectTimeoutMS: 15000, // Slightly reduced for faster failure
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 15000,
      family: 4,
      retryWrites: true,
      retryReads: true,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        if (process.env.NODE_ENV !== "production") {
          console.log("✅ MongoDB connected successfully");
        }
        return mongoose;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("❌ MongoDB connection error:", error.message);
        // Log additional debug info in production
        if (process.env.NODE_ENV === "production") {
          console.error("MongoDB URI:", MONGODB_URI ? "Exists" : "Missing");
        }
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

// Optional: Add connection event listeners for debugging
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

export default dbConnect;
export { mongoose };