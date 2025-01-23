import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connections[0].readyState) {
    // Already connected
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 30000, // 30 seconds connection timeout
      socketTimeoutMS: 30000,  // 30 seconds socket timeout
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to database');
  }
};

export default dbConnect;
