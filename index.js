var express = require("express");
var app = express();

app.get("/isworking", function (req, res) {
  res.send("VERCEL ANDA?");
});

app.get("/", function (req, res) {
  res.send("HOLAA");
});

app.listen(3000, function () {
  console.log("RUNNING ON PORT 3000");
});
