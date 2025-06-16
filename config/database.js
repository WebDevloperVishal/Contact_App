import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
  try {

    if (!process.env.MONGO_URL) {
      throw new Error('MONGO_URL environment variable is not defined');
    }
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Database Connected ✅");
  } catch (error) {
    console.error("Database Connection Failed ❌");
    console.error("Error:", error.message);
    process.exit(1);
  }
}