import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const EngagementRate = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Avg. Engagement Rate {(twitterData.engagementRate + youtubeData.engagementRate) / 2 * 100}%</h3>
    </div>
  )
}

export default EngagementRate;