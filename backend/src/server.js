import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import cors from "cors"

import { connectDB } from "./config/config.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001



// Middleware -- 
app.use(cors({
    origin: "http://localhost:5173",
}));
// This function is to get access to req.body object--{title, content}, so we can use them to handle the NOTES.
app.use(express.json());
app.use(rateLimiter);

// Logs method and url before forwarding calls to the NEXT function in the stack -- in that case is 
// app.use("/api/notes", notesRoutes);
// next() is the next function in the stack 

app.use((req, res, next) => {
    console.log("Middleware example", `Req method is: ${req.method} & Req URL is: ${req.url}`);
    next();
});

app.use("/api/notes", notesRoutes);

// Connect to DB then start listening to requests 

connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("Server started on PORT: ", PORT);
    });

});



