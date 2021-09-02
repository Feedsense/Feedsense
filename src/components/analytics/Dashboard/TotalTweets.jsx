import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';

const TotalTweets = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div className="outline">
      <h3>Total Tweets {twitterData.totalTweets}</h3>
    </div>
  )
}

export default TotalTweets;