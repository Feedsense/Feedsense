import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const TotalFollowers = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Total Followers {twitterData.followers + youtubeData.subscribers}</h3>
    </div>
  )
}

export default TotalFollowers;