var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serving static content for the app from the "public" directory in the app directory
app.use(express.static(process.cwd() + "/app/public"));

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


/**********************************************/
// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});