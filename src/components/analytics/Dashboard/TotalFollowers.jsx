import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const TotalFollowers = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <h3>Total Followers {twitterData.followers + youtubeData.subscribers}</h3>
  )
}

export default TotalFollowers;