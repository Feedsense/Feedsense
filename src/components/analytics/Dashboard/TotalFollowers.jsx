import React, {useContext} from 'react';
import { TwitterContext, YouTubeContext } from '../Analytics.jsx';
import { RiUserFollowLine } from 'react-icons/ri'

const TotalFollowers = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div id='total-followers' className="outline card">
      <RiUserFollowLine size={50} />
      <div className='card-content'>
        <h2 className='card-data'>{twitterData.followers + Number(youtubeData.channelTotalsandVideos.channelStatistics.subscriberCount)}</h2>
        <h3 className='card-header'>Total Followers/Subscribers</h3>
      </div>
    </div>
  )
}

export default TotalFollowers;