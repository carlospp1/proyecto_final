import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDb = async () => {
    const MONGO_URI = "mongodb://usuario:password123@localhost:27017/myRestaurantDB";
    if (!MONGO_URI) {
        throw new Error('Please provide a valid MONGO_URI in the .env file');
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
};



export default connectToDb;
