const express = require("express");
const { connectToDB } = require("./dbConfig");
require("dotenv").config();

const app = express();

const port = Number(process.env.PORT);

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Welcome");
});

app.listen(port, () => {
  connectToDB();
  console.log(`Running at http://localhost:${port}`);
});
