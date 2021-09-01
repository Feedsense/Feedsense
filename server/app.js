const express = require('express')
const path = require('path');

const app = express();
const {serverip, serverport} = require('../env/config.js').serverconfig;
const router = require('./routes');
const logger = require('morgan');

app.use(router);
app.use(logger('dev'));
app.use(express.static(__dirname + '/../public'));

app.listen(serverport, () => {
  console.log(`Feedsense listening at http://${serverip}:${serverport}`)
})