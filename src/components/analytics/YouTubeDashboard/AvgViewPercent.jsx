import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const AvgViewPercent = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline card">
      <div className='card-content'>
        <h2 className='card-data'>{(youtubeData.channelAnalytics.averages[1]).toFixed(0)}%</h2>
        <h3 className='card-header'>Avg % of Video Viewed</h3>
      </div>
    </div>
  )
}

export default AvgViewPercent;