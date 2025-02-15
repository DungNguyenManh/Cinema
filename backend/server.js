import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/config/db.js"
import userRoutes from "./src/routes/user.route.js"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json())

app.use("/api/users", userRoutes)

app.listen(3000, () => {
    connectDB()
    console.log("Server is running on http://localhost:" + PORT);
});