// our required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// setting the Port as process.env.PORT to use with Heroku, else 8080
var PORT = process.env.PORT || 8080;

// utilizing Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// run server here
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  