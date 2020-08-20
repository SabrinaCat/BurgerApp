const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();
//.env file for protecting database info
require("dotenv").config();
//first option to use our .env we set up, or default to port 8080
PORT = process.env.PORT || 8080
//goes into public folder to grab our front end code
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//set main as the background layout and 
//index will contain dynamically created data
app.engine("handlebars", exphbs({ defaultLayout: "index" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burger_controller.js");
app.use(routes);
//route for homepage
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "main"));
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});