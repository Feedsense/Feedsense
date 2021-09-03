const config =  require( '../../env/config.js');
const axios = require('axios');
const { TwitterApi } = require('twitter-api-v2');
const env = require('../../env/config');
// const { keys } = require('../../src/components/feed/feed-example-data.js');

const keys = env.keys;

// const client = new TwitterApi({
//   appKey: keys.CONSUMER_KEY,
//   appSecret: keys.CONSUMER_SECRET,
//   accessToken: req.session.oauthAccessToken,
//   accessSecret: req.session.oauthAccessTokenSecret
// })

module.exports = {
  getFeed: (req, res) => {
    console.log(req.cookies)
    const client = new TwitterApi({
      appKey: keys.CONSUMER_KEY,
      appSecret: keys.CONSUMER_SECRET,
      accessToken: req.cookies.oauthAccessToken,
      accessSecret: req.cookies.oauthAccessTokenSecret
    })
    client.v1.homeTimeline()
      .then(data => res.send(data.tweets))

  },
  // getMyTweets: (req, res) => {
  //   const client = new TwitterApi({
  //     appKey: keys.CONSUMER_KEY,
  //     appSecret: keys.CONSUMER_SECRET,
  //     accessToken: req.cookies.oauthAccessToken,
  //     accessSecret: req.cookies.oauthAccessTokenSecret
  //   })
  //   client.v1.
  // }
}