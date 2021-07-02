var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Welcome! Babys");
});
app.listen(3000, () => {
  console.log(`Server on port 3k`);
});
