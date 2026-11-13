import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    body: {
        type: String,
        required: [true, "Body is required"]
    }
});

export const NoteModel = mongoose.model('Note', noteSchema);