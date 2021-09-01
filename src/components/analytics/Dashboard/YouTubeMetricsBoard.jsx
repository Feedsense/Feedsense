import React, { useState, useContext } from 'react';
import { TwitterContext, YouTubeContext } from '../Analytics.jsx';
import Chart from 'react-apexcharts';

const YoutubeMetricsBoard = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>YouTube</h3>
      <h5>Last 30 Days Video Avg.</h5>
      <div>
        <h4>Avg. Views</h4>
        <h4>{youtubeData.runningMonthlyPerVideoViewsAvg}</h4>
      </div>
      <div>
        <h4>Avg. Likes</h4>
        <h4>{youtubeData.runningMonthlyPerVideoLikesAvg}</h4>
      </div>
      <div>
        <h4>Avg. Comments</h4>
        <h4>{youtubeData.runningMonthlyPerVideoCommentsAvg}</h4>
      </div>
    </div>
  )
}

export default YoutubeMetricsBoard;