import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const AvgViewDuration = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline card">
      <div className='card-content'>
        <h2 className='card-data'>{(youtubeData.channelAnalytics.averages[2] / 60).toFixed(0)} minutes</h2>
        <h3 className='card-header'>Avg Minutes Viewed Per Video</h3>
      </div>
    </div>
  )
}

export default AvgViewDuration;