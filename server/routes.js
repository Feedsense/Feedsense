const express = require('express');
const router = express.Router();

const youtubeCtrl = require('../server/controllers/youtube');
const OauthCtrl = require('../server/controllers/Oauth.js');

router.get('/user/:id', youtubeCtrl.getData);
router.get('/auth/:fname/:gname/:id', OauthCtrl.newUser);
router.put('/authAddTwitter/:id/:tid', OauthCtrl.updateTwitter);
router.put('/authAddYoutube/:id/:yid', OauthCtrl.updateYoutube);

<<<<<<< HEAD
router.get('/getYoutube/:access_token', youtubeCtrl.getFeed);

=======
>>>>>>> e2fe43406fced7bdea30e790a7b5b91ed70cb82d

module.exports = router;