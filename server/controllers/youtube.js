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
    let count = req.params.count ? '100' : req.params.count
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${config.youtubeAPI} HTTP/1.1&maxResults=100`;
    let token = req.params.access_token;


    axios.get(url, {headers: { Authorization: `Bearer ${token}` }})
      .then(data => {
        res.status(200).send(data.data.items);
      })
      .catch( err => {
        console.error('ERROR RETRIEVING DATA: ', err.stack);
      });
  },

  getAnalytics: (req, res) => {
    let url = `https://youtubeanalytics.googleapis.com/v2/reports`;
    console.log(req.params)
    let token = req.params.access_token;

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        ids: 'channel==MINE',
        endDate: '2021-01-01',
        metrics: 'estimatedMinutesWatched,averageViewPercentage,averageViewDuration,views,comments,likes,dislikes,shares,subscribersGained,subscribersLost',
        startDate: '2018-01-01',
        dimensions: 'video',
        maxResults: '100',
        sort: '-views'
      }
    })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.error(err);
    })

  }
}