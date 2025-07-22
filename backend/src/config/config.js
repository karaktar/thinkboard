
import mongoose from "mongoose";
import dotenv from "dotenv";

/**
 * @file This file handles the database connection.
 * It uses Mongoose to connect to a MongoDB database using a connection string
 * from the environment variables.
 */

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

/**
 * Connects to the MongoDB database.
 * If the connection is unsuccessful, it logs the error and exits the process.
 */
export const connectDB = async () => {
    try {
        await mongoose.connect(mongo_uri);
        console.log("Connected to MONGODB successfully!...");
    } catch (error) {
        console.error("Error connecting to MONGODB", error);
        process.exit(1); // exit 1 means failure
    }
}; 