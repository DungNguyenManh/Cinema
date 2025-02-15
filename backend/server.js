import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json())


app.listen(3000, () => {
    console.log("Server is running on http://localhost:" + PORT);
});