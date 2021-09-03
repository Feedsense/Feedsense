import React from 'react';
import Top100Videos from './Top100Videos.jsx';
import LikesToViewsPlot from './LikesToViewsPlot.jsx';
import AvgViewPercent from './AvgViewPercent.jsx';
import AvgViewDuration from './AvgViewDuration.jsx';
import TotalMinutesWatched from './TotalMinutesWatched.jsx';
import LikePercentage from './LikePercentage.jsx';
import ViewsPerMonth from './ViewsPerMonth.jsx';


const YoutubeDashboard = () => {

  return (
    <div>
      <AvgViewDuration />
      <AvgViewPercent />
      <TotalMinutesWatched />
      <LikePercentage />
      <ViewsPerMonth />
      <LikesToViewsPlot />
      <Top100Videos />
    </div>
  )
}

export default YoutubeDashboard;