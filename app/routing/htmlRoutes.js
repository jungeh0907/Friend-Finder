// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {
	// Route that sends the user to the survey page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// Route that sends the user to the home page
	app.use(function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};