//mongodb+srv://<username>:<password>@cluster0.iz4xn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ayush:ayush@cluster0.iz4xn.mongodb.net/petshop?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
