import express, { Request, Response } from "express";
import cors from 'cors'
import 'dotenv/config'
import { VercelRequest, VercelResponse } from "@vercel/node";
//files import
import { connectDB } from "./config/connectDB";
import openRouter from "./routes/openResponse";

const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend to access backend
    methods: ["GET", "POST"], // Allow GET and POST methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
  })
);

app.use(express.json());

//rest apis
app.use('/api', openRouter)

//connect to db
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
