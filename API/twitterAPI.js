const e = require('express');
var Twit = require('twit')

var config = {
  consumer_key:        'nw1DPSO7B2cznA4RTtIio82S3',
  consumer_secret:     'lgsDl5lUoF2W5Cqp2s25J8QBIfRQsJW33OJFYk5HCQPmyL2PqR',
  access_token:        '1419694577443803138-C5MRsnJvUDaKNhaX3FmPuXJ7IFJmKn',
  access_token_secret: 'vCM3SpzJmRsc1NWTZZOl20hOaHsYXEnyT3sGH7BZPFR1G'
}
var T = new Twit(config);

var params = {
  count: 20,
  exclude_replies: true,
  tweet_mode:'extended'
}

var formatRetrievedData = (err, data, respons) => {
  if(err) {
    throw err;
  }
// declare an array tweets
var tweets = [];
//iterate through data
for (var i = 0; i < data.length; i++) {
  //declare tweet as empty obj
  var tweet = {};
  //if it's not retweet
  if (!data[i].retweeted_status && !data[i].is_quote_status) {
    // get the indices
    if(data[i].entities.media) {
    var indices = data[i].entities.media[0].indices;
    // get the media url and store
    tweet.mediaUrl =data[i].entities.media[0].media_url;
    } else if (data[i].entities.urls[0]) {
    var indices = data[i].entities.urls[0].indices;
    tweet.mediaUrl = data[i].entities.urls[0].expanded_url;
    }
    tweet.text = data[i].full_text.slice(0, indices[0]) + data[i].full_text.slice(indices[1]);
    // get the url and store
    tweet.url = data[i].full_text.slice(indices[0], indices[1]);
    // get the date/time and store
    tweet.date = data[i].created_at;
    tweet.name = data[i].user.name;
    tweet.screen_name = data[i].user.screen_name;
    tweets.push(tweet);
  }
}
  console.log(tweets);
};

getTweet = () => {
  T.get('statuses/home_timeline', params, formatRetrievedData);
}

postTweet = () => {
  T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
  })



