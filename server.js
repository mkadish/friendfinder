// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


  

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
require("./app/routing/htmlRoutes")(app, path);
require("./app/routing/apiRoutes")(app, path);
require("./app/data/friends");