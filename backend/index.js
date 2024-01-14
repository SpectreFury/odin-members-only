require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const Message = require("./models/Message");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.get("/getBlasts", async (req, res) => {
  try {
    const messages = await Message.find();
    const token = req.headers["x-access-token"];
    const modifiedArray = messages.map((message) => {
      return {
        text: message.text,
        author: "Anonymous",
      };
    });

    if (!token) {
      return res.json(modifiedArray);
    }

    const decoded = jwt.verify(token, "RANDOM-TOKEN");
    const user = await User.findOne({ username: decoded.username });

    if (user.isMember) {
      res.json(messages);
    } else {
      res.json(modifiedArray);
    }
  } catch (error) {
    console.log(error);
  }
});

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
    res.status(200).send({
      message: "Sign up successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
});

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
