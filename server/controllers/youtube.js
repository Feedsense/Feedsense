const youtubeModels = require('../../database/models/youtube');
const config =  require( '../../env/config.js');
const axios = require('axios');

module.exports = {
  getData: (req, res) => {
    youtubeModels.getData((err, response) => {
      if (err) {
        return console.error('ERROR RETRIEVING DATA: ', err.stack);
      }

      res.status(200).send();
    });
  },


  getFeed: (req, res) => {
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${config.youtubeAPI} HTTP/1.1&maxResults=100`;
    let token = req.params.access_token;


    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${config.youtubeAPI} HTTP/1.1&maxResults=30`, {headers: { Authorization: `Bearer ${token}` }})
      .then(data => {
        res.status(200).send(data.data.items);
      })
      .catch( err => {
        console.error('ERROR RETRIEVING DATA: ', err.stack);
      });
  }
}