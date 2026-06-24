import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("Connecting to:", uri); // add this temporarily
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default connectDB;