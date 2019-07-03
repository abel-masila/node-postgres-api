import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//dotenv init
dotenv.config();

//initialize express app
const app = express();

//app use cors middleware
app.use(cors());

// GET /
app.get("/", (req, res, next) => {
  res.send("Hello browser");
});
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
