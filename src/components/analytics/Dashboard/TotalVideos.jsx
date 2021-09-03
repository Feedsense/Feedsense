import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const TotalVideos = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Total Videos {Number(youtubeData.channelTotalsandVideos.channelStatistics.videoCount)}</h3>
    </div>
  )
}

export default TotalVideos;