import React from 'react';
import FollowersChart from './FollowersChart.jsx';
import TotalFollowers from './TotalFollowers.jsx';
import GrowthGraph from './GrowthGraph.jsx';

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <TotalFollowers />
      <FollowersChart />
      <GrowthGraph />
    </div>
  )
}

export default Dashboard;