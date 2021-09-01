const express = require('express');
const router = express.Router();

const youtubeCtrl = require('../server/controllers/youtube');
const OauthCtrl = require('../server/controllers/Oauth.js');

router.get('/user/:id', youtubeCtrl.getData);
router.get('/auth/:fname/:gname/:id', OauthCtrl.newUser);


module.exports = router;