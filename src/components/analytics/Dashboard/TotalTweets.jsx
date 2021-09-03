import React, {useContext} from 'react';
import {TwitterContext, YouTubeContext} from '../Analytics.jsx';
import { FaTwitterSquare } from 'react-icons/fa';

const TotalTweets = () => {

  const twitterData = useContext(TwitterContext);
  const youtubeData = useContext(YouTubeContext);

  return (
    <div id='total-tweets' className="outline card">
      <FaTwitterSquare size={50} className='icon' />
      <div className='card-content'>
        <h2 className='card-data'>{twitterData.totalTweets}</h2>
        <h3 className='card-header'>Total Tweets</h3>
      </div>
    </div>
  )
}

export default TotalTweets;