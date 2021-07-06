const cookieParser = require("cookie-parser");
let express = require("express");
let logger = require("morgan");
let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(logger());
app.use(cookieParser());

//routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/users", (req, res) => {
  res.send("Hey this is users route");
});

app.listen(4000, () => {
  console.log("on server 4000...");
});
