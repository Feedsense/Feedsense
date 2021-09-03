import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';
import { IoVideocam } from 'react-icons/io5';

const TotalVideos = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div id='total-videos' className="outline card">
      <IoVideocam size={50} />
      <div className='card-content'>
        <h2 className='card-data'>{Number(youtubeData.channelTotalsandVideos.channelStatistics.videoCount)}</h2>
        <h3 className='card-header'>Total Videos</h3>
      </div>
    </div>
  )
}

export default TotalVideos;