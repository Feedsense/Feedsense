import React from 'react';
import FollowersChart from './FollowersChart.jsx';
import TotalFollowers from './TotalFollowers.jsx';
import GrowthGraph from './GrowthGraph.jsx';
import TwitterMetricsBoard from './TwitterMetricsBoard.jsx';
import YouTubeMetricsBoard from './YouTubeMetricsBoard.jsx';
import '../../../style.css';

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <TotalFollowers />
      <FollowersChart />
      <GrowthGraph />
      <div className="inline-row">
        <TwitterMetricsBoard />
        <YouTubeMetricsBoard />
      </div>
    </div>
  )
}

export default Dashboard;