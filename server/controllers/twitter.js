const config =  require( '../../env/config.js');
const axios = require('axios');
const { TwitterApi } = require('twitter-api-v2');
const env = require('../../env/config');
const Twit = require('twit');
// const { keys } = require('../../src/components/feed/feed-example-data.js');

const keys = env.keys;

// const client = new TwitterApi({
//   appKey: keys.CONSUMER_KEY,
//   appSecret: keys.CONSUMER_SECRET,
//   accessToken: req.session.oauthAccessToken,
//   accessSecret: req.session.oauthAccessTokenSecret
// })
var formatRetrievedData = (data, respons) => {

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
    tweet.text = data[i].full_text.slice(0, indices[0]) + data[i].full_text.slice(indices[1]);
    // get the url and store
    tweet.url = data[i].full_text.slice(indices[0], indices[1]);
    } else if (data[i].entities.urls[0]) {
    var indices = data[i].entities.urls[0].indices;
    tweet.mediaUrl = data[i].entities.urls[0].expanded_url;
    tweet.text = data[i].full_text.slice(0, indices[0]) + data[i].full_text.slice(indices[1]);
    // get the url and store
    tweet.url = data[i].full_text.slice(indices[0], indices[1]);
  } else {
  // tweet.text = data[i].full_text.slice(0, indices[0]) + data[i].full_text.slice(indices[1]);
    tweet.text = data[i].full_text;
    try {
      tweet.url = data[i].entities.urls[0].url;
    } catch {
      tweet.url = '';
    }
    // tweet.url = data[i].entities.urls[0].url
  }
    // // get the url and store
    // tweet.url = data[i].full_text.slice(indices[0], indices[1]);
    // get the date/time and store
    tweet.date = data[i].created_at;
    tweet.name = data[i].user.name;
    tweet.screen_name = data[i].user.screen_name;
    tweets.push(tweet);
  }
}
    return tweets;
};

module.exports = {
  getFeed: (req, res) => {
    console.log(req.cookies)
    const client = new TwitterApi({
      appKey: keys.CONSUMER_KEY,
      appSecret: keys.CONSUMER_SECRET,
      accessToken: req.cookies.oauthAccessToken,
      accessSecret: req.cookies.oauthAccessTokenSecret
    })
    client.v1.homeTimeline({'expansions': ['public_metrics']})
    .then(data => {

      for (const tweet of data) {
        console.log(tweet)
      }
    })
  },
  // .then(data => {
  //   console.log(data.data);
  //   res.send(data.data)})
  postTweet:(myStatus) => {
    const T = new Twit({
      appKey: keys.CONSUMER_KEY,
      appSecret: keys.CONSUMER_SECRET,
      accessToken: req.cookies.oauthAccessToken,
      accessSecret: req.cookies.oauthAccessTokenSecret
    })
    T.post('statuses/update', { status: 'hello again' }, function(err, data, response) {
    // console.log(data)
    })}
  }
