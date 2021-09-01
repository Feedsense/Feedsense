const express = require('express');
const router = express.Router();

const youtubeCtrl = require('../server/controllers/youtube');
const OauthCtrl = require('../server/controllers/Oauth.js');

router.get('/user/:id', youtubeCtrl.getData);
router.get('/auth/:fname/:gname/:id', OauthCtrl.newUser);
router.put('/authAddTwitter/:id/:tid', OauthCtrl.updateTwitter);
router.put('/authAddYoutube/:id/:yid', OauthCtrl.updateYoutube);

router.get('/getYoutube/:access_token', youtubeCtrl.getFeed);
router.get('/getYoutubeAnalytics/:access_token', youtubeCtrl.getAnalytics);


module.exports = router;