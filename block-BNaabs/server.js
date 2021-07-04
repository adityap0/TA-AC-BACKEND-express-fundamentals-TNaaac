// - Add a GET request on '/' route and render 'index.html' file using `res.sendFile`.
// - Add a GET request on '/new' route and render new.html with a html form.
// - add a post request on '/new' route and display submitted form data
// - add a route with params to grab request made on `/users/1234` or `/users/asdf`

let express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});
app.post("/new", (req, res) => {
  console.log(`Yes`);
});
app.post("/users/:username", (req, res) => {
  let name = req.params.username;
  console.log(name);
});

app.listen(3000, () => {
  console.log(`Listening on 3000...`);
});
