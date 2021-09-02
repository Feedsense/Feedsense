import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';


const TwitterDashboard = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);


  return (
    <div className="outline">
      <h3>This is now the twitter dashboard</h3>

    </div>
  )
}

export default TwitterDashboard;