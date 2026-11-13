import expres, {type Application} from 'express';
import cors from 'cors';
import notesRouter from "../routes/notes.router.ts";
import {connectDB} from "../database/config.ts";


export class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        notes: '/api/notes'
    };

    constructor() {
        this.app = expres();
        this.port = process.env.PORT || '8080';

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(expres.json());
    }

    private routes(){
        this.app.use('/api/notes', notesRouter);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server escuchando en puerto ${this.port}`);
        });
    }

    private async connectDB() {
        await connectDB();
    }
}
