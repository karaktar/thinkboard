
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(mongo_uri);
        // console.log("Connected to MONGODB successfully!..." + process.env.MONGO_URI);
        console.log("Connected to MONGODB successfully!...");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1); // exit 1 means failure
    }
} 