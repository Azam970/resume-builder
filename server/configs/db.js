import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default connectDB;