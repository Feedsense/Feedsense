import React, { useContext } from 'react';
import { YouTubeContext } from '../Analytics.jsx';
import Chart from 'react-apexcharts';

const LikesToViewsPlot = () => {

  const youtubeData = useContext(YouTubeContext);
  var likesAndViews = []

  youtubeData.channelTotalsandVideos.userVideos.map((video, index) => {
    var temp = []
    temp.push(Number(video.statistics.likeCount))
    temp.push(Number(video.statistics.viewCount))
    likesAndViews.push(temp)
  })

  const plot = {
    series: [{
        name: 'Likes to Views per Video',
        data: likesAndViews
      }],
    options: {
      chart: {
        toolbar: {
          show: false
        },
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 15,
        labels: {
          formatter: function(val) {
            return parseFloat(val).toFixed(0)
          }
        }
      },
      yaxis: {
        tickAmount: 10
      }
    }
  }


  return (
    <div>
      <Chart
        options={plot.options}
        series={plot.series}
        type="scatter"
        height={350}
      />
    </div>
  )
}

export default LikesToViewsPlot;