import React, {useContext} from 'react';
import Chart from 'react-apexcharts';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const GrowthGraph = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  var growthChart = {
    series: [
      {
        name: 'Twitter',
        data: twitterData.subscriberGrowth
      },
      {
        name: 'YouTube',
        data: youtubeData.subscriberGrowth
      }
    ],
    chartOptions: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      stroke: {
        curve: 'smooth'
      },
      colors: ['#2E93fA', '#63FFC1'],
      // xasis: {
      //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      // }
    }
  }

  return (
    <Chart
    options={growthChart.chartOptions}
    series={growthChart.series}
    type='line'
    width='700'
    />
  )
}

export default GrowthGraph;