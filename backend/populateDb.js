require("dotenv").config();

const mongoose = require("mongoose");
const Message = require("./models/Message");

mongoose.connect(process.env.MONGODB_URI);

const populateDb = async () => {
  await Message.create({
    text: "Spotted: Georgina in a coffee shop with Serena Van Der Woodsen. What are this two girls doing together? Is Dan aware that his wife is with his ex, and formerly best friend?",
    author: "Gossip Girl",
  });

  console.log("Messages populated");
};

populateDb();
