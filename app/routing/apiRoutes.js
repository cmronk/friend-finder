// we'll need to load data from our user here

var friendData = require("../data/friends.js");


// ____________________________________________________________
// routing

module.exports = function(app) {

    // GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // POST requests
    app.post("/api/friends", function(req, res){
        if (friendData.length < 10){
        newEntry.push(req.body);
        res.json(true);
    } else {
        friendData.push(req.body);
        res.json(false);
    }
    });
}