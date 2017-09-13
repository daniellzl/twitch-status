# Twitch Status

View the status of various Twitch.tv channels

[Live Application](twitch-status-dlzl.surge.sh)

### Project Goals

Application was completed as a freeCodeCamp [challenge](https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api).

1. User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.

2. User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.

3. User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.

4. Hint: See an example call to Twitch.tv's JSONP API at http://forum.freecodecamp.org/t/use-the-twitchtv-json-api/19541.

5. Hint: The relevant documentation about this API call is here: https://dev.twitch.tv/docs/v5/reference/streams/#get-stream-by-user.

6. Hint: Here's an array of the Twitch.tv usernames of people who regularly stream: ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

7. UPDATE: Due to a change in conditions on API usage explained here Twitch.tv now requires an API key, but we've built a workaround. Use https://wind-bow.gomix.me/twitch-api instead of twitch's API base URL (i.e. https://api.twitch.tv/kraken ) and you'll still be able to get account information, without needing to sign up for an API key.

### Technologies

* bootstrap
* jquery
* twitch.tv api
