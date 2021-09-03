import React from 'react';
import TotalFollowers from './TotalFollowers.jsx';
import FollowersChart from './FollowersChart.jsx';
import TotalViews from './TotalViews.jsx';
import ViewsChart from './ViewsChart.jsx';
import EngagementRate from './EngagementRate.jsx';
import TotalTweets from './TotalTweets.jsx';
import TotalVideos from './TotalVideos.jsx';
import HashtagTreeMap from './HashtagTreeMap.jsx';
import '../../../style.css';

const Dashboard = () => {

  return (
    <div className="dashboard-main">
      <div className='dashboard-main-row-one'>
        <TotalFollowers />
        <TotalViews />
        <EngagementRate />
      </div>
      <div className='dashboard-main-row-two'>
        <FollowersChart />
        <ViewsChart />
        <div className='dashboard-row-two-last'>
          <TotalTweets />
          <TotalVideos />
        </div>
      </div>
      <HashtagTreeMap />
    </div>
  )
}

export default Dashboard;