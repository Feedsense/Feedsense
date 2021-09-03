const express = require('express');
const router = express.Router();
const path = require('path');

const youtubeCtrl = require('../server/controllers/youtube');
const OauthCtrl = require('../server/controllers/Oauth.js');

router.get('/auth/:fname/:gname/:id', OauthCtrl.newUser);
router.put('/authAddTwitter/:id/:tid', OauthCtrl.updateTwitter);
router.put('/authAddYoutube/:id/:yid', OauthCtrl.updateYoutube);

router.get('/user/:id', youtubeCtrl.getData);
router.get('/getYoutube/:access_token', youtubeCtrl.getFeed);
router.get('/getYoutubeAnalytics/:access_token/:current_date', youtubeCtrl.getAnalytics);
router.get('/getYoutubeChannelAnalytics/:access_token/:current_date', youtubeCtrl.getChannelAnalytics);
router.get('/getYoutubeChannelTotalsAndVideos/:access_token/:current_date', youtubeCtrl.getChannelTotalsAndVideos)

router.post('/uploadYoutube', youtubeCtrl.postVideo);

module.exports = router;