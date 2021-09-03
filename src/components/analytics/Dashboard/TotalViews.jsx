import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';
import { IoEyeSharp } from 'react-icons/io5'

const TotalViews = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div id='total-views' className="outline card">
      <IoEyeSharp size={50} />
      <div className='card-content'>
        <h2 className='card-data'>{twitterData.totalImpresssions + Number(youtubeData.channelTotalsandVideos.channelStatistics.viewCount)}</h2>
        <h3 className='card-header'>Total Views/Impressions</h3>
      </div>
    </div>
  )
}

export default TotalViews;