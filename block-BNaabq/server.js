let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
var app = express();

app.use(cookieParser());
app.use("/about", (req, res, next) => {
  res.cookie("username", "suraj");
  res.end(`About End!`);
  next();
});
app.use((req, res, next) => {
  console.log(req.cookie);
  next();
});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/users", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/users/:username", (req, res) => {
  var username = req.params.username;
});

app.post("/json", (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log(`on url 4k`);
});
