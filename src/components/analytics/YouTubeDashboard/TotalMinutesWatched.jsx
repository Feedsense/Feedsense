import React, {useContext} from 'react';
import { YouTubeContext } from '../Analytics.jsx';

const TotalMinutesWatched = () => {

  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline card">
      <div className='card-content'>
        <h2 className='card-data'>{youtubeData.channelTotalsandVideos.totalVideoMetrics.estimatedMinutesWatched}</h2>
        <h3 className='card-header'>Total Minutes Watched </h3>
      </div>
    </div>
  )
}

export default TotalMinutesWatched;