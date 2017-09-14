// defines array holding twitch.tv users
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];

// when document is loaded
$(document).ready(function() {
  // fade in page
  $(".container").fadeIn(1500);
  // loop through users
  for (var i = 0; i < users.length; i++) {
    // protects i in immediately called function because $.getJSON method makes i = users.length
    (function(i) {
      // obtain data about freeCodeCamp's stream
      $.getJSON('https://wind-bow.hyperdev.space/twitch-api/streams/' + users[i] + '?callback=?', function(data) {
        // if user does not exist
        if (data.error != null) {
          // update user status with closed account
          $('#' + users[i]).html('Account Closed');
          // if user stream is offline
        } else if (data.stream == null) {
          // update user status with offline
          $('#' + users[i]).html('Offline');
          // if user stream is active
        } else {
          // update user status with stream information
          $('#' + users[i]).html(data.stream.channel.game + ': ' + data.stream.channel.status);
        }
        return false;
      });
      return false;
    })(i);
  }
});
