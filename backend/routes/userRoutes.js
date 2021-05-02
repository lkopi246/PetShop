const express = require("express");
const bcryptjs = require("bcryptjs");
const router = express.Router();

const User = require("../models/User");

router.get("/signup", (req, res) => {
  res.send({ test: "test json" });
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });

  const salt = await bcryptjs.genSalt(10);

  user.password = await bcryptjs.hash(user.password, salt);

  user.save((err) => {
    if (err) {
      console.log(err);
      res.send({
        message: "Error",
        error: err,
      });
    } else {
      res.send({
        message: "Successfuly signed Up",
        user,
      });
    }
  });
});

module.exports = router;
