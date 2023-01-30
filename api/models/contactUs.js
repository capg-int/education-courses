
const mongoose = require("mongoose");

const contactUsInfoScehma = mongoose.Schema({
  location: { type: "String", required: [true, "location is required"] },
  email: { type: "String", required: [true, "email is required"] },
  phoneNumber: { type: "String", required: [true, "phone number is required"] },
});

 const contactUS = new mongoose.model("contactUs", contactUsInfoScehma);

 module.exports = contactUS;
