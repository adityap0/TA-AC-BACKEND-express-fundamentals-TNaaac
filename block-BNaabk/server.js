var express = require("express");
var app = express();

app.use("/admin", (req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.get((req, res) => {
  res.send("Happy Happy");
});
app.listen(3000, () => {
  console.log(`Server on port 3k`);
});
