import React, {useContext} from 'react';
import Chart from 'react-apexcharts';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const HashtagTreeMap = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  const hashTags = {}
  const tagData = []

  youtubeData.channelTotalsandVideos.userVideos.map((video, index) => {
    video.snippet.tags.map((tag, i) => {
      if (!hashTags[tag]) {
        hashTags[tag] = Number(video.statistics.viewCount)
      } else {
        hashTags[tag] += Number(video.statistics.viewCount)
      }
    })
  })

  for (var tag in hashTags) {
    var temp = {}
    temp.x = tag;
    temp.y = hashTags[tag]
    tagData.push(temp)
  }

  var hashtagTree = {
    series: [
      {
        data: tagData
      }
    ],
    options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: 'Hashtag Performance'
      }
    }
  }

  return (
    <Chart
    options={hashtagTree.options}
    series={hashtagTree.series}
    type='treemap'
    height={350}
    />
  )
}

export default HashtagTreeMap;