import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const LikePercentage = () => {

  const youtubeData = useContext(YouTubeContext);



  return (
    <div className="outline card">
      <div className='card-content'>
        <h2 className='card-data'>{((youtubeData.channelTotalsandVideos.totalVideoMetrics.likes / youtubeData.channelTotalsandVideos.totalVideoMetrics.views) * 100).toFixed(0)}%</h2>
        <h3 className='card-header'>Likes to Views Percentage</h3>
      </div>
    </div>
  )
}

export default LikePercentage;