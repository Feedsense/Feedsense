import React, { useState, useContext } from 'react';
import { TwitterContext, YouTubeContext } from '../Analytics.jsx';
import Chart from 'react-apexcharts';

const TwitterMetricsBoard = () => {

  const twitterData = useContext(TwitterContext);

  return (
    <div className="outline">
      <h3>Twitter</h3>
      <h5>Last 30 Days Tweet Avg.</h5>
      <div>
        <h4>Avg. Impressions</h4>
        <h4>{twitterData.runningMonthImpressionsAvg}</h4>
      </div>
      <div>
        <h4>Avg. Likes</h4>
        <h4>{twitterData.runningMonthLikesAvg}</h4>
      </div>
      <div>
        <h4>Avg. Retweets</h4>
        <h4>{twitterData.runningMonthRetweetsAvg}</h4>
      </div>
    </div>
  )
}

export default TwitterMetricsBoard;