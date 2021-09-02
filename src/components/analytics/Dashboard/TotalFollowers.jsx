import React, {useContext} from 'react';
import { TwitterContext, YouTubeContext } from '../Analytics.jsx';

const TotalFollowers = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  console.log('total followers comp', youtubeData)

  return (
    <div className="outline">
      <h3>Total Followers {twitterData.followers + Number(youtubeData.channelTotals.channelStatistics.subscriberCount)}</h3>
    </div>
  )
}

export default TotalFollowers;