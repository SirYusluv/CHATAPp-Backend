const express = require("express");
const Router = express.Router();

exports.signup = Router.post("/signup", (req, res) => {
  const username = req.body.username;
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;

  res.status(201).json({ message: "DONE" });
});
