// writeCode

let express = require("express");
var app = express();

//middleware
app.use((req, res, next) => {
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(`Method :`, req.method, `Url :`, req.url, `time : `, time);
  next();
});
app.use((req, res, next) => {
  next();
});
app.get("/", (req, res) => {
  res.end();
});
app.listen(4000, () => {
  console.log(`Server is listening @ 4000...`);
});
