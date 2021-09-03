import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const AvgViewPercent = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Avg % of Video Viewed {(youtubeData.channelAnalytics.averages[1]).toFixed(0)}%</h3>
    </div>
  )
}

export default AvgViewPercent;