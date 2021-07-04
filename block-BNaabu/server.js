let express = require("express");
var app = express();
var logger = require("morgan");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/admin", (req, res, next) => {
  next("Unauthorized");
});

//routes
app.get("/", (req, res) => {});
app.get("/about", (req, res) => {});

//Error handlers
app.use((req, res, next) => {
  res.send(`Error 404 : Page not Found...`);
});
app.use((error, req, res, next) => {
  res.send(error);
});

//listener
app.listen(3000, () => {
  console.log(`On Port 3000...`);
});
