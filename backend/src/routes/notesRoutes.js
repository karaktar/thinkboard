import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById,
} from "../controllers/notesControllers.js";

/**
 * @file This file defines the API routes for note-related operations.
 * It uses an Express Router to group the note routes and map them to the corresponding controller functions.
 */

const router = express.Router();

// Route to get all notes
router.get("/", getAllNotes);

// Route to get a single note by its ID
router.get("/:id", getNoteById);

// Route to create a new note
router.post("/", createNote);

// Route to update an existing note by its ID
router.put("/:id", updateNote);

// Route to delete a note by its ID
router.delete("/:id", deleteNote);

export default router;
