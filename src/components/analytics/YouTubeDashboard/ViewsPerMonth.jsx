import React, { useContext } from 'react';
import { YouTubeContext } from '../Analytics.jsx';
import Chart from 'react-apexcharts';

const ViewsPerMonth = () => {

  const youtubeData = useContext(YouTubeContext);
  var today = new Date();
  var thisYear = today.getFullYear();
  var thisMonth = today.getMonth() + 1;
  var monthRefArray = [];
  var numOfViewsPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var categoryArray = []
  var categories = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec'
  }

  for (var i = 1; i < thisMonth + 1; i++) {
    monthRefArray.push(i);
  }
  for (var j = 12; j > thisMonth; j--) {
    monthRefArray.unshift(j);
  }

  monthRefArray.map((month, index) => {
    categoryArray.push(categories[month])
  })

  youtubeData.channelTotalsandVideos.userVideos.map((video, index) => {
    var videoDate = new Date(video.snippet.publishedAt)
    var diffInTime = today - videoDate;
    var diffInDays = diffInTime / (1000 * 3600 * 24);

    if (diffInDays <= 365) {
      numOfViewsPerMonth[monthRefArray.indexOf(Number(videoDate.getMonth() + 1))] += Number(video.statistics.viewCount)
    }
  })

  var chart = {
    series: [{
      name: 'Views Per Month',
      data: numOfViewsPerMonth
    }],
    options: {
      chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Trailing 12 Months - Views Per Month',
        align: 'center'
      },
      labels: categoryArray,
      xasis: {
        type: 'string'
      }
    }
  }

  return (
    <div>
      <Chart
        options={chart.options}
        series={chart.series}
        type='area'
      />
    </div>
  )
}

export default ViewsPerMonth;