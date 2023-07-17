import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDb = () => {
    const MONGO_URI = process.env.MONGO_URI || '';
    mongoose
        .connect(MONGO_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log('Failed to connect to MongoDB', error));
};

export default connectToDb;
