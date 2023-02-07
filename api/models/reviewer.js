const mongoose = require("mongoose");

const reviewerSchema = mongoose.Schema(
  {
    name: { type: "String", required: [true, "Reviewer Name is required"] },
    designation: { type: "String", required: [true, "Reviewer Designation is Required"] },
  },
  {
    versionKey: false,
  }
);

const Reviewer = new mongoose.model("reviewer", reviewerSchema);

module.exports = Reviewer;
