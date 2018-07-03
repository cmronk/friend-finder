// we'll need to load data from our user here

var friendData = require("../data/friends.js");


// ____________________________________________________________
// routing

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
}