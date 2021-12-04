import express from "express";
import dotenv from "dotenv";
import connectDB from "./Db/connect.js";
import userRoutes from "./Routers/userRoute.js";
import cors from "cors";
const PORT = 8000 || process.env.PORT;

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`SERVER listening at http://localhost:${PORT}`);
});
