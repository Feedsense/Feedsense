import React, { useState, useContext, Component } from 'react';
import { TwitterContext, YouTubeContext } from '../Analytics.jsx';
import Chart from 'react-apexcharts';
import Switch from 'react-switch';



const GrowthGraph = () => {
  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  const [checked, setChecked] = useState(false)
  const [twitterGraphData, setTwitterGraphData] = useState(twitterData.subscriberGrowth)
  const [youtubeGraphData, setYoutubeGraphData] = useState(youtubeData.subscriberGrowth)
  const [graphTitle, setGraphTitle] = useState('Subscriber Growth')

  var growthChart = {
    series: [
      {
        name: 'Twitter',
        data: twitterGraphData
      },
      {
        name: 'YouTube',
        data: youtubeGraphData

      }
    ],
    chartOptions: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      stroke: {
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#2E93fA', '#63FFC1'],
      xasis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    }
  }

  const flipSwitch = (nextChecked) => {
    setChecked(nextChecked)

    if (checked === true) {
      setGraphTitle('Subscriber Growth')
      setTwitterGraphData(twitterData.subscriberGrowth)
      setYoutubeGraphData(youtubeData.subscriberGrowth)
    } else {
      setGraphTitle('Comments per Month')
      setTwitterGraphData(twitterData.monthlyComments)
      setYoutubeGraphData(youtubeData.monthlyComments)

    }
  }

  return (
    <div>
      <h3>{graphTitle}</h3>
      <div>
        <h4>Subscribers</h4>
        <Switch
          onChange={flipSwitch}
          checked={checked}
          onColor="#86d3ff"
          offColor="#86d3ff"
          uncheckedIcon={false}
          checkedIcon={false}
          />
        <h4>Comments</h4>
      </div>
      <Chart
        options={growthChart.chartOptions}
        series={growthChart.series}
        type='area'
        width='700'
      />
    </div>
  )
}

export default GrowthGraph;