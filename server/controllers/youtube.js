const youtubeModels = require('../../database/models/youtube');

module.exports = {
  getData: (req, res) => {
    youtubeModels.getData((err, response) => {
      if (err) {
        return console.error('ERROR RETRIEVING DATA: ', err.stack);
      }
      //console.log(req.params);

      res.status(200).send();
    });
  }
}