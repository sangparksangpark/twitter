const config = require("./src/config");
const Twit = require("twit");

const Bot = new Twit(config);
var thirtySeconds = 30000;

function tweet(txt) {
  Bot.post(
    "statuses/update",
    {
      status: txt
    },
    (err, data, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${data.text} tweeted!`);
      }
    }
  );
}

function tweetRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 1000);
  tweet(randomNumber);
}

setInterval(tweetRandomNumber, thirtySeconds);
