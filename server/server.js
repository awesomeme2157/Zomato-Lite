const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
