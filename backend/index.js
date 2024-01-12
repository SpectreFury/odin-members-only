require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI);

app.post("/login", async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });

    if (!user.length) {
      throw new Error("No user exists");
    }

    const passwordMatched = await bcryptjs.compare(
      req.body.password,
      user[0].password
    );

    if (passwordMatched) {
      const token = jwt.sign(
        {
          userId: user[0]._id,
          username: user[0].username,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24hr" }
      );
      res.status(200).send({
        message: "Login successful",
        username: user[0].username,
        token,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/sign-up", async (req, res) => {
  try {
    const user = await User.find({ username: req.body.username });

    if (user.length) {
      console.log(user);
      throw new Error("User already exists");
    }

    const hashedPassword = await bcryptjs.hash(req.body.password, 12);

    await User.create({
      name: req.body.name,
      username: req.body.username,
      password: hashedPassword,
      isMember: false,
    });
    res.json({
      message: "Signup Success",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
