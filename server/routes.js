const express = require('express');
const router = express.Router();

const youtubeCtrl = require('../server/controllers/youtube');

router.get('/user/:id', youtubeCtrl.getData);

module.exports = router;