const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please Enter the username"],
  },
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
