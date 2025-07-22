import mongoose from "mongoose";

/**
 * @file This file defines the Mongoose schema and model for a Note.
 * The schema specifies the structure of a note document in the MongoDB collection.
 */

/**
 * The Mongoose schema for a Note.
 * @type {mongoose.Schema}
 */
const noteSchema = new mongoose.Schema(
    {
        /**
         * The title of the note.
         * @type {string}
         * @required
         */
        title: {
            type: String,
            required: true,
        },

        /**
         * The content of the note.
         * @type {string}
         * @required
         */
        content: {
            type: String,
            required: true,
        },
    },
    {
        /**
         * Enables automatic creation of `createdAt` and `updatedAt` timestamps.
         */
        timestamps: true,
    }
);

/**
 * The Mongoose model for a Note.
 * This model is used to interact with the `notes` collection in the database.
 * @type {mongoose.Model<Note>}
 */
const Note = mongoose.model("Note", noteSchema);

export default Note;
