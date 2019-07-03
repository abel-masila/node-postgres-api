import express from "express";

//initialize express app
const app = express();

// GET /
app.get("/", (req, res, next) => {
  res.send("Hello browser");
});
app.listen(3000, () => {
  console.log("App running on port 30000");
});
