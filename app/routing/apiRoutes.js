// we'll need to load data from our user here

var friendData = require("../data/friends.js");
// routing

module.exports = function(app) {

    // GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // POST requests
    app.post("/api/friends", function(req, res){
        var newEntry = req.body;

        var matchingScores = newEntry.scores;

        var matchedName = "";
        var matchedPic = "";
        var comparison = 100;

        for (var i = 0; i < friendData.length; i++) {
            var difference = 0;
            for (var j = 0; j < matchingScores.length; j++) {
                difference += Math.abs(friendData[i].scores[j] - matchingScores[j]);
            }
        if (difference < comparison) {
            comparison = difference;
            matchedName = friendData[i].name;
            matchedPic = friendData[i].photo;
        }
        }

        friendData.push(newEntry);

        res.json({status: "OK", matchedName: matchedName, matchedPic: matchedPic});
    });
}