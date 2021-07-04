// - add middleware for handling static assets
// - add third party mddleware for logging and handling cookies
// - add 2 sample routes with some random response of your choice

//   1. GET -> `/` route
//   2. GET -> `/users` route

// - add middleware for handling errors

const cookieParser = require("cookie-parser");
let express = require("express");
let logger = require("morgan");
let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res) => {
  next("unauthorised");
});
app.use(express.static("public"));
app.use(logger());
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  res.send("Hey this is index route");
});
app.get("/users", (req, res) => {
  res.send("Hey this is users route");
});

app.listen(4000, () => {
  console.log("on server 4000...");
});
// Q. Using the above structure, convert a multipage HTML/CSS project into a node application.

// - render all pages on seperate routes, for example
//   - main page on `/` route
//   - projects page on `/projects` routes etc..
// - keep all static assets in public directory, for example

//   - images in images/media directory
//   - css in stylesheets directory

//   Directory Structure should be

//   - package.json
//   - server.js // main server file
//   - public // static asset path for images/css
//   - index.html
//   - projects.html and so on ..
