import { type Request, type Response} from "express";
import {NoteModel} from "../models/note.model.ts";

export const getNotes = async (req: Request, res: Response) => {
    const { searchTerm } = req.query;

    try {
        const notes = await NoteModel.find();

        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({message: "Error fetching notes"});
    }
}

export const createNote = async (req: Request, res: Response) => {
    const {title, body} = req.body;

    if (!title || !body) {
        return res.status(400).json({
            message: "Invalid note data"
        });
    }

    try {
        const newNote = new NoteModel({title, body});
        await newNote.save();
        res.status(201).json({
            message: "Note created successfully",
            data: newNote
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating note"
        });
    }
};