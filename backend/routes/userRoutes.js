const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", (req, res) => {
  res.send({ test: "test json" });
});

router.post("/", (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });

  user.save((err) => {
    if (err) {
      console.log(err);
      res.send({
        message: "Error",
        error: err,
      });
    } else {
      // console.log("user created");
      res.send({
        message: "Successfuly signed Up",
        user,
      });
    }
  });
});

module.exports = router;
