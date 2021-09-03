const express = require('express');
const oauth = require('oauth');
const router = express.Router();
const path = require('path');

const env= require('../env/config');
const keys = env.keys;
const youtubeCtrl = require('../server/controllers/youtube');
const OauthCtrl = require('../server/controllers/Oauth.js');
const twitter = require('./controllers/twitter');

// const twitterCtrl = require('../server/controllers/twitter');

const _twitterConsumerKey = keys.CONSUMER_KEY;
const _twitterConsumerSecret = keys.CONSUMER_SECRET;

router.get('/auth/:fname/:gname/:id', OauthCtrl.newUser);
router.put('/authAddTwitter/:id/:tid', OauthCtrl.updateTwitter);
router.put('/authAddYoutube/:id/:yid', OauthCtrl.updateYoutube);

router.get('/user/:id', youtubeCtrl.getData);
router.get('/getYoutube/:access_token', youtubeCtrl.getFeed);
router.get('/getYoutubeAnalytics/:access_token/:current_date', youtubeCtrl.getAnalytics);
router.get('/getYoutubeChannelAnalytics/:access_token/:current_date', youtubeCtrl.getChannelAnalytics);
router.get('/getYoutubeChannelTotalsAndVideos/:access_token/:current_date', youtubeCtrl.getChannelTotalsAndVideos)

router.post('/uploadYoutube', youtubeCtrl.postVideo);

router.get('/getTwitterFeed', twitter.getFeed)
// router.get('/getTwitterFeed/:access_token/:access_token_secret', twitterCtrl.getFeed);
function consumer() {
  return new oauth.OAuth(
    "https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token",
    _twitterConsumerKey, _twitterConsumerSecret, "1.0A", "http://localhost:3001/auth/twitter/callback", "HMAC-SHA1");
}

router.get('/auth/twitter', function(req, res){
  consumer().getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret, results){
    if (error) {
      res.send("Error getting OAuth request token : " + sys.inspect(error), 500);
    } else {
      req.session.oauthRequestToken = oauthToken;
      req.session.oauthRequestTokenSecret = oauthTokenSecret;
      res.redirect("https://twitter.com/oauth/authorize?oauth_token="+req.session.oauthRequestToken);
    }
  });
});

router.get('/auth/twitter/callback', (req, res) => {
  // console.log(req.query);
  consumer().getOAuthAccessToken(req.session.oauthRequestToken, req.session.oauthRequestTokenSecret, req.query.oauth_verifier, function(error, oauthAccessToken, oauthAccessTokenSecret, results) {
    if (error) {
      res.send("Error getting OAuth access token : " + sys.inspect(error) + "["+oauthAccessToken+"]"+ "["+oauthAccessTokenSecret+"]"+ "["+sys.inspect(results)+"]", 500);
    } else {
      req.session.oauthAccessToken = oauthAccessToken;
      req.session.oauthAccessTokenSecret = oauthAccessTokenSecret;

    res.cookie('oauthAccessToken', req.session.oauthAccessToken);
    res.cookie('oauthAccessTokenSecret', req.session.oauthAccessTokenSecret)
    res.redirect('/#/feed')


}})})
module.exports = router;