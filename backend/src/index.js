import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
import {app, server} from "./lib/socket.js";

import path from "path";




app.use(cors({
    origin: 'http://localhost:5173', // Frontend origin
    credentials: true // Allow cookies
}));
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

dotenv.config();

const PORT= process.env.PORT
const __dirname = path.resolve();

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
    });
}


server.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
    connectDB();
})