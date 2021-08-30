const express = require('express');
const router = express.Router();
const controllers = require('../database/controllers');

router.get('/user/:id', (req, res) => {
  controllers.getData((err, response) => {
    if (err) {
      return console.error('ERROR RETRIEVING DATA: ', err.stack);
    }
    console.log(req.params);
    res.status(200).send(response);
  });
});

module.exports = router;