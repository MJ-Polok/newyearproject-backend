import express from "express";
import dataRouter from "./routes/data.routes.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", dataRouter)

app.listen(4001, async () => {
    console.log("Server is running on port 4001");
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        
    }
});