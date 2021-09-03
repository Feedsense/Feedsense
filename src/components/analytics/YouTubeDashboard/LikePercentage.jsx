import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const LikePercentage = () => {

  const youtubeData = useContext(YouTubeContext);



  return (
    <div className="outline">
      <h3>Likes to Views Percentage {((youtubeData.channelTotalsandVideos.totalVideoMetrics.likes / youtubeData.channelTotalsandVideos.totalVideoMetrics.views) * 100).toFixed(0)}%</h3>
    </div>
  )
}

export default LikePercentage;