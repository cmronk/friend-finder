// here we will house our routes to the HTML

// dependencies
var path = require("path");

// routes
module.exports = function(app) {
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname + "../../public/home.html"))
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "../../public/survey.html"));
    });

    // defaults to home if none selected
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname + "../../public/home.html"))
    });
}