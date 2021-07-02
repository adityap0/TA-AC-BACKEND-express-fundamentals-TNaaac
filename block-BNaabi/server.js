var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});
app.listen(4000, () => {
  console.log(`Server on port 3k`);
});
