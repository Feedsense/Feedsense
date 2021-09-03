import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const EngagementRate = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  const likes = Number(youtubeData.channelTotalsandVideos.totalVideoMetrics.likes);
  const dislikes = Number(youtubeData.channelTotalsandVideos.totalVideoMetrics.dislikes);
  const comments = Number(youtubeData.channelTotalsandVideos.totalVideoMetrics.comments);
  const subscribers = Number(youtubeData.channelTotalsandVideos.channelStatistics.subscriberCount);
  const youtubeEngagementRate = (likes + dislikes + comments) / subscribers ? (likes + dislikes + comments) / subscribers : 0;

  return (
    <div className="outline">
      <h3>Avg. Engagement Rate {((twitterData.engagementRate + youtubeEngagementRate) / 2 * 100).toFixed(2)}%</h3>
    </div>
  )
}

export default EngagementRate;