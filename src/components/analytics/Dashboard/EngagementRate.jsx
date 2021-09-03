import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';
import { IoChatbox } from 'react-icons/io5'

const EngagementRate = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  const likes = Number(youtubeData.channelTotalsandVideos.totalVideoMetrics.likes);
  const dislikes = Number(youtubeData.channelTotalsandVideos.totalVideoMetrics.dislikes);
  const comments = Number(youtubeData.channelTotalsandVideos.totalVideoMetrics.comments);
  const subscribers = Number(youtubeData.channelTotalsandVideos.channelStatistics.subscriberCount);

  const youtubeEngagementRate = ((likes + dislikes + comments) / (youtubeData.channelTotalsandVideos.totalVideoMetrics.views * 100) * 100).toFixed(2);

  return (
    <div id='engagement-rate' className="outline card">
      <IoChatbox size={50}/>
      <div className='card-content'>
        <h2 className='card-data'>{((likes + dislikes + comments) / (youtubeData.channelTotalsandVideos.totalVideoMetrics.views * 100) * 100).toFixed(2) }%</h2>
        <h3 className='card-header'>Avg. Engagement Rate</h3>
      </div>
    </div>
  )
}

export default EngagementRate;