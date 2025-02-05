import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongoose Connected');
    } catch (error) {
        console.log('Database Error', error);
        process.exit(1);
    }
}

export default connectDB;

