import { Router } from 'express';
import {
    createNote,
    getNotes,
} from '../controllers/notes.controller.ts';

const router = Router();

router.get('/', getNotes);
router.post('/', createNote);


export default router;