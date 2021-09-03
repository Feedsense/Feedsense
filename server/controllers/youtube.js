const youtubeModels = require('../../database/models/youtube');
const config =  require( '../../env/config.js');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const busboy = require('connect-busboy');
const {google} = require('googleapis');

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
        startDate: '2006-01-01',
        dimensions: 'video',
        maxResults: '200',
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
        startDate: '2006-01-01',
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
  },

  getChannelTotalsAndVideos: (req, res) => {
    let url = `https://youtubeanalytics.googleapis.com/v2/reports`;
    let urlStatistics = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&mine=true';
    let token = req.params.access_token;
    let currentDate = req.params.current_date;

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        ids: 'channel==MINE',
        endDate: currentDate,
        metrics: 'estimatedMinutesWatched,views,comments,likes,dislikes,shares,subscribersGained,subscribersLost',
        startDate: '2006-01-01',
        dimensions: 'video',
        maxResults: '200',
        sort: '-views'
      }
    })
    .then((response) => {
      let resObj = {
        videos: []
      };
      let columns = response.data.columnHeaders.map((column) => {
        return column.name
      });
      let rows = response.data.rows;
      for (let i = 0; i < rows.length; i++) {
        let currentRow = rows[i];
        for(let j = 0; j < currentRow.length; j++) {
          if (j === 0) {
            resObj.videos.push(currentRow[j]);
          } else {
            if (!resObj[columns[j]]) {
              resObj[columns[j]] = 0;
              resObj[columns[j]] += currentRow[j];
            } else {
              resObj[columns[j]] += currentRow[j];
            }
          }
        }
      }
      return resObj;
    })
    .then((resObj) => {
      axios.get(urlStatistics, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        let channelData = {
          totalVideoMetrics: resObj,
          channelStatistics: response.data.items[0].statistics
        }

        let videos = '';

        channelData.totalVideoMetrics.videos.forEach((videoId) => {
          videos += videoId + ','
        })
        videos = videos.slice(0, videos.length - 1);

        axios.get('https://www.googleapis.com/youtube/v3/videos', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            part: 'contentDetails,topicDetails,statistics,snippet',
            id: videos
          }
        })
        .then((videoData) => {
          res.status(200).send({
            totalVideoMetrics: channelData.totalVideoMetrics,
            channelStatistics: channelData.channelStatistics,
            userVideos: videoData.data.items
          })
        })
        .catch((err) => {
          console.log(err);
        })

      })
      .catch((err) => {
        console.log(err);
      })

    })
    .catch((err) => {
      console.error(err);
    })
  },

  postVideo: (req, res) => {
    const youtube = google.youtube;
    const clientID = config.clientId;
    const clientSecret = config.OAuthData.clientSecret;
    const clientURI = config.OAuthData.redirectURI;

    req.pipe(req.busboy);

    // var formData = new Map();

    // req.busboy.on('field', (fieldname, val) => {
    //   formData.set(fieldname, val);
    //   console.log(formData);
    // })
    // console.log('Moving on!');

    req.pipe(req.busboy);

    req.busboy.on('file', (fieldname, file, filename) => {
      console.log(`Upload of ${filename} started`);

      const fwstream = fs.createWriteStream(path.join(__dirname, `/../../public/videos/${filename}`));
      file.pipe(fwstream);

      fwstream.on('close', () => {
        console.log(`Upload of ${filename} complete`);
        res.send();
      });
    });
  }
}