const express = require("express");
const { signup } = require("./controller/auth");

const app = express();

app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authentication");
  next();
});

app.use("/auth", signup);

app.listen(8080);
