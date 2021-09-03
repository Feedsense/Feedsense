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
    <div className='youtube-dashboard'>
      <div className='dashboard-youtube-row-one youtube-row'>
        <AvgViewDuration />
        <AvgViewPercent />
      </div>
      <div className='dashboard-youtube-row-two youtube-row'>
        <TotalMinutesWatched />
        <LikePercentage />
      </div>
      <div className='dashboard-youtube-row-three youtube-row'>
        <ViewsPerMonth/>
        <LikesToViewsPlot />
      </div>
      <Top100Videos style={{width: '100%'}}/>
    </div>
  )
}

export default YoutubeDashboard;