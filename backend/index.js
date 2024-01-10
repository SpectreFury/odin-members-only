require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
