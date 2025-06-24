import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // latest first
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNote controller", error);
        res.status(500).json({ message: "Internat server error" });
    }

}


export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" })
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({ message: "Internat server error" });
    }

}
// export const getAllNotes = (req, res) => {
//     res.status(200).send("You got 10 notes");
// };

export async function createNote(req, res) {
    try {
        const { title, content } = req.body
        const newNote = new Note({ title, content });
        // const newNote = new Note({title: title, content: content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Internat server error" });
    }
}

// export const createNote = (req, res) => {
//         res.status(201).send("Note created successfully!...")
// };

// export const updateNote = (req, res) => {
//     res.status(200).send("Note updated successfully!...");
// };

export async function updateNote(req, res) {

    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });

        if (!updatedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(updatedNote);

    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({ message: "Internat server error" });
    }
}


// export const deleteNote =  (req, res) => {
//     res.status(200).send("Note deleted successfully!...");
// };

export async function deleteNote(req, res) {

    try {
        //const { title, content } = req.body;
        const deleteNote = await Note.findByIdAndDelete(req.params.id);

        if (!deleteNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(deleteNote);

    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({ message: "Internat server error" });
    }
}
