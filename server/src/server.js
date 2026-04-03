import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";

import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";
import "./utils/selfPing.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(compression());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,               // allow cookies, auth headers
}));
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => res.send("Duo Stack Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));