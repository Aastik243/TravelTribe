import express, { urlencoded } from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app= express();

// to parse data from form
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(cookieParser());



app.use("/api/auth", authRoutes);



app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    connectMongoDB();
});