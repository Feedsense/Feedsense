const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
// Multer used too much RAM going to try using busboy express middleware
// const multer = require('multer');
// var storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, path.join(__dirname, '/../public/videos'));
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// })
// const upload = multer({storage: storage});

const youtubeCtrl = require('../server/controllers/youtube');
const OauthCtrl = require('../server/controllers/Oauth.js');

router.get('/user/:id', youtubeCtrl.getData);
router.get('/auth/:fname/:gname/:id', OauthCtrl.newUser);
router.put('/authAddTwitter/:id/:tid', OauthCtrl.updateTwitter);
router.put('/authAddYoutube/:id/:yid', OauthCtrl.updateYoutube);

router.get('/getYoutube/:access_token', youtubeCtrl.getFeed);
router.get('/getYoutubeAnalytics/:access_token/:current_date', youtubeCtrl.getAnalytics);
router.get('/getYoutubeChannelAnalytics/:access_token/:current_date', youtubeCtrl.getChannelAnalytics);

//router.post('/uploadYoutube', upload.single('video'), youtubeCtrl.postVideo); Multer way using too much RAM
router.post('/uploadYoutube', youtubeCtrl.postVideo);

module.exports = router;