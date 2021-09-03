import React, {useContext} from 'react';
import Chart from 'react-apexcharts';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';


const ViewsChart = () => {
  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  var viewsChart = {
    series: [twitterData.totalImpresssions, Number(youtubeData.channelTotalsandVideos.channelStatistics.viewCount)],
    chartOptions: {
      labels: ['Twitter', 'YouTube']
    }
  };

  return (
    <div className="outline">
      <h3>Views/Impressions Breakdown</h3>
      <Chart
        options={viewsChart.chartOptions}
        series={viewsChart.series}
        type='donut'
        width='380'
      />
    </div>
  )
}

export default ViewsChart;