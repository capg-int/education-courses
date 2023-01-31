// user.js
const {
  Schema,
  model
} = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true
  },
  role: {
    type: String,
    default: "basic",
    required: true
  }
})

module.exports = model("users", UserSchema);
