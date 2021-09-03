import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const TotalMinutesWatched = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Total Minutes Watched {youtubeData.channelTotalsandVideos.totalVideoMetrics.estimatedMinutesWatched}</h3>
    </div>
  )
}

export default TotalMinutesWatched;