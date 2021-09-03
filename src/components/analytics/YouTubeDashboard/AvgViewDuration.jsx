import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const AvgViewDuration = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Avg Minutes Viewed Per Video {(youtubeData.channelAnalytics.averages[2] / 60).toFixed(0)} minutes</h3>
    </div>
  )
}

export default AvgViewDuration;