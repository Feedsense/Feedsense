import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const TotalViews = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Total Views/Impressions {twitterData.totalImpresssions + Number(youtubeData.channelTotalsandVideos.channelStatistics.viewCount)}</h3>
    </div>
  )
}

export default TotalViews;