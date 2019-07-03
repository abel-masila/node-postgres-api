import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import bodyParser from "body-parser";

//dotenv init
dotenv.config();

//initialize express app
const app = express();

//app use  middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to the default API route"
  })
);
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
