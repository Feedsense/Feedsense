import React, {useContext} from 'react';
import Chart from 'react-apexcharts';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';


const FollowersChart = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  var followersChart = {
    series: [twitterData.followers, Number(youtubeData.channelTotalsandVideos.channelStatistics.subscriberCount)],
    chartOptions: {
      labels: ['Twitter', 'YouTube']
    }
  };

  return (
    <div className="outline">
      <h3>Followers/Subscribers Breakdown</h3>
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