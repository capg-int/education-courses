const mongoose = require("mongoose");

const authorSchema = mongoose.Schema(
  {
    name: { type: "String", required: [true, "Author Name is required"] },
    email: { type: "String", required: [true, "Author Email is Required"] },
  },
  {
    versionKey: false,
  }
);

const Author = new mongoose.model("author", authorSchema);

module.exports = Author;
