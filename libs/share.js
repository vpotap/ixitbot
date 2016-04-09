var Twitter = require('twitter');
var FB = require('fb');

function SocialClass (title, body, attach) {

}

SocialClass.prototype.constructor = SocialClass;

SocialClass.prototype.tweet = function tweet (params) {
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

  client.post('statuses/update', params, function (error, tweet, response) {
    console.log(response.body);
  });
};

module.exports = SocialClass;