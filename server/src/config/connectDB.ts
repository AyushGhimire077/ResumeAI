import mongoose from "mongoose";
import 'dotenv/config';

//mongo uri from dotenv
const mongo_uri = process.env.MONGO_URI
if (!mongo_uri) {
    console.log("mongo uri not found")
    process.exit(1)
}


//function for connecting db
export const connectDB = async () => { 
    try {   
        await mongoose.connect(mongo_uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}