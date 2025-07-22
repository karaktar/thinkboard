import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import cors from "cors";
import path from "path";
import { connectDB } from "./config/config.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

/**
 * @file This is the main entry point for the backend server.
 * It sets up the Express application, configures middleware, defines routes,
 * and connects to the database before starting the server.
 */

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// --- Middleware --- //

// Enable CORS for the development environment to allow requests from the frontend dev server.
if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173",
    }));
}

// Parse incoming JSON requests to access `req.body`.
app.use(express.json());

// Apply rate limiting to all incoming requests.
app.use(rateLimiter);

// Custom middleware to log the method and URL of each incoming request.
app.use((req, res, next) => {
    console.log(`Req method is: ${req.method} & Req URL is: ${req.url}`);
    next();
});

// --- API Routes --- //

// Mount the notes API routes under the "/api/notes" path.
app.use("/api/notes", notesRoutes);

// --- Production-Specific Configuration --- //

// If the application is in production, serve the static frontend build.
if (process.env.NODE_ENV === "production") {
    // Serve the static files from the React app's 'dist' directory.
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    // For any other request, serve the 'index.html' file from the frontend build.
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

// --- Server Initialization --- //

// Connect to the database and then start the Express server.
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT: ", PORT);
    });
});



