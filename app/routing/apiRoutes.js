var friends = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log(friends)
  });

  
  app.post("/api/friends", function(req, res) {
      
  var friendmatch = {
    name: "",
    photo: "",
    friendDifference: 100000000
};
  
var userData = req.body;
var userScores = userData.scores;

var totalDifference;

for (var i = 0; i < friends.length-1; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      scoresum = 0;
      scoreproduct = 1;

      console.log(currentFriend.name);

for (var j = 0; j < currentFriend.scores.length; j++) {
  var currentFriendScore = currentFriend.scores[j];
  var currentUserScore = userScores[j];

  scoresum += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
  scoreproduct *= 1+Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));

  totalDifference = scoresum*scoreproduct;
}

if (totalDifference <= friendmatch.friendDifference) {
  friendmatch.name = currentFriend.name;
  friendmatch.photo = currentFriend.photo;
  friendmatch.friendDifference = totalDifference;
}
}

friends.push(userData);

res.json(friendmatch);
});};
