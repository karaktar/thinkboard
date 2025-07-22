import Note from "../models/Note.js";

/**
 * @file This file contains the controller functions for handling note-related operations.
 * It includes functions for creating, retrieving, updating, and deleting notes.
 * Each function is designed to be used as a middleware in an Express.js application.
 */

/**
 * Fetches all notes from the database, sorted by creation date.
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 */
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // latest first
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/**
 * Fetches a single note by its ID.
 * @param {object} req - The Express request object, containing the note ID as a parameter.
 * @param {object} res - The Express response object.
 */
export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/**
 * Creates a new note with the provided title and content.
 * @param {object} req - The Express request object, containing the title and content in the body.
 * @param {object} res - The Express response object.
 */
export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/**
 * Updates an existing note with a new title and content.
 * @param {object} req - The Express request object, containing the note ID as a parameter and the new title and content in the body.
 * @param {object} res - The Express response object.
 */
export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

        if (!updatedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/**
 * Deletes a note by its ID.
 * @param {object} req - The Express request object, containing the note ID as a parameter.
 * @param {object} res - The Express response object.
 */
export async function deleteNote(req, res) {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id);

        if (!deleteNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(deleteNote);
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
