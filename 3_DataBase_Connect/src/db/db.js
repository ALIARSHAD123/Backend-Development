const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://work:6mkxMUfnQH3_26L@backend-development.bfhfsyh.mongodb.net/halley",
  );

  console.log("connectd to db ✔️ ");
}

module.exports = connectDB;
