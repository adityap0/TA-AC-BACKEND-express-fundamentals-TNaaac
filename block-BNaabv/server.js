const cookieParser = require("cookie-parser");
let express = require("express");
let app = express();
let logger = require("morgan");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cookieParser());
// app.use((req, res, next) => {
//   next(`UnAuthorised`);
// });

app.get("/", (req, res) => {
  res.cookie("session_id", "1234");
  res.status(200);
  res.setHeader("Content-Type", "text/html");
  res.send(`<h2>Welcome to express</h2>`);
});
app.get("/about", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send(`My name is qwerty`);
});
app.get("/users/:username", (req, res) => {
  let username = req.params.username;
  res.send(`<h2>${username}</h2>`);
});
app.post("/form", (req, res) => {
  res.send(req.body);
});
//errorHandlers
app.use((req, res) => {
  res.send(`404, not found`);
});
// app.use((err, req, res, next) => {
//   res.send(err);
// });

app.listen(3000, () => {
  console.log("On server 3000...");
});
