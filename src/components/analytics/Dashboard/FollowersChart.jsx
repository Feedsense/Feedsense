import React, {useContext} from 'react';
import Chart from 'react-apexcharts';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';


const FollowersChart = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  var followersChart = {
    series: [twitterData.followers, youtubeData.subscribers],
    chartOptions: {
      labels: ['Twitter', 'YouTube']
    }
  }

  return (
    <div>
      <h3>Followers Breakdown</h3>
      <Chart
        options={followersChart.chartOptions}
        series={followersChart.series}
        type='donut'
        width='380'
      />
    </div>
  )
}

export default FollowersChart;