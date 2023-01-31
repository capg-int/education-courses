const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema({
  name: { type: "String", required: [true, "Name is required"] },
  image: { type: "String", required: [true, "Image is required"] },
  summary: { type: "String", required: [true, "Summary is required"] },
  description: { type: "String", required: [true, "Description is required"] },
  comments: { type: "String", required: [true, "Comments is required"] },
  title: { type: "String", required: [true, "Title is required"] },
  designation: { type: "String", required: [true, "Designation is required"] },
});

const about = new mongoose.model("about", aboutSchema);

module.exports = about;
