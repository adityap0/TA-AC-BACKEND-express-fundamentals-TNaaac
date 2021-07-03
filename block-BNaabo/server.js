let express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();

app.use(logger("dev"));
app.use(cookieParser());

app.use((req, res, next) => {
  var count = req.cookies.count;
  if (count) {
    res.cookie("count", count++);
  } else {
    res.cookie("count", 1);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/json", (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log(`on url 4k`);
});
