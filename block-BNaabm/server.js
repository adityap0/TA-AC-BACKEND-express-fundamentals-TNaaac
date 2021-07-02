let express = require("express");
var app = express();

app.use((req, res, next) => {
  console.log(`Hey this is the middleWare`);
  next();
});
app.get("/", (req, res) => {
  console.log(req.method, req.url);
  res.send();
});

app.listen(4000, () => {
  console.log(`on url 4k`);
});
