import React from 'react';
import TotalFollowers from './TotalFollowers.jsx';
import FollowersChart from './FollowersChart.jsx';
import TotalViews from './TotalViews.jsx';
import ViewsChart from './ViewsChart.jsx';
import EngagementRate from './EngagementRate.jsx';
import TotalTweets from './TotalTweets.jsx';
import TotalVideos from './TotalVideos.jsx';
import '../../../style.css';

const Dashboard = () => {

  return (
    <div className="dashboard-main">
      <TotalFollowers />
      <FollowersChart />
      <TotalViews />
      <ViewsChart />
      <EngagementRate />
      <TotalTweets />
      <TotalVideos />
    </div>
  )
}

export default Dashboard;