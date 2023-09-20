import mongoose from "mongoose";

export const connectMongodb = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb connected")
    } catch (error) {
        console.log("Error connecting to Mongoodb: " + error)
    }
}