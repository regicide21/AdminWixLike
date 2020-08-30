const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3201;

// const images = require("./routes/images.js");
const home = require("./routes/index.js");
const login = require("./routes/login.js");
const admin = require("./routes/admin.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
const { connection } = require("./config");

// adding express-hbs
const exphbs = require("express-handlebars");
// turning on layout's
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});
// hbs is main engine
app.engine("hbs", hbs.engine);
// hbs main turn on for the hbs work
app.set("view engine", "hbs");
// show where the hbs's are
app.set("views", "views");
// // trying to register helper
// hbs.registerHelper("grg", function(array){
//     return 'апр';
// });

app.use(
  session({
    secret: "sombrero",
    resave: false,
    saveUninitialized: false,
    message: []
  })
);
session.message = [];

app.use(home);
// app.use(images);
app.use(login);
app.use(admin);

app.listen(PORT, () => {
  console.log("Server working on port: " + PORT + ";");
});