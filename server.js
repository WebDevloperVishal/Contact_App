import express from "express";
import dotenv from "dotenv"; 

import ContactRoutes from "./routes/contacts.routes.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Database Connection
dotenv.config();             
connectDB();

const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Routes
app.use("/", ContactRoutes);

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}.`);
});
