import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';


const YoutubeDashboard = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);


  return (
    <div className="outline">
      <h3>This is now the YouTube dashboard</h3>

    </div>
  )
}

export default YoutubeDashboard;