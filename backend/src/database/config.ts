import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
            /*user: 'admin',
            pass: 'admin',*/
            authSource: 'admin',
            dbName: 'notes-app-db',
        });
        console.log(`Database is connected`);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}