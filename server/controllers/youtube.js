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
    let token = req.params.access_token;
    let currentDate = req.params.current_date;

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        ids: 'channel==MINE',
        endDate: currentDate,
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

  },

  getChannelAnalytics: (req, res) => {
    let url = `https://youtubeanalytics.googleapis.com/v2/reports`;
    let token = req.params.access_token;
    let currentDate = req.params.current_date

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        ids: 'channel==MINE',
        endDate: currentDate,
        metrics: 'estimatedMinutesWatched,averageViewPercentage,averageViewDuration,views,comments,likes,dislikes,shares,subscribersGained,subscribersLost',
        startDate: '2007-01-01',
        dimensions: 'video',
        maxResults: '100',
        sort: '-views'
      }
    })
    .then((response) => {
      let totalAverages = []
      let columns = response.data.columnHeaders.map((column) => {
        return column.name
      });
      let rows = response.data.rows;
      for (let i = 0; i < rows.length; i++) {
        let currentRow = rows[i]
        for (let j = 0; j < currentRow.length; j++) {
          if (j === 0) {
            totalAverages[j] = 'averages for all videos combined'
          } else {
            if (totalAverages[j] === undefined) {
              totalAverages[j] = currentRow[j]
            } else {
              totalAverages[j] += currentRow[j]
            }
          }
        }
      }
      for (let i = 0; i < totalAverages.length; i++) {
        if (typeof totalAverages[i] === 'number') {
          totalAverages[i] = totalAverages[i] / rows.length;
        }
      }
      columns.shift();
      totalAverages.shift();
      res.status(200).send({
        averages: totalAverages,
        columns: columns
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }
}