import React, { useState } from 'react';
import Auth from '../Auth.js';
import {Switch, Link} from 'react-router-dom';
import feedExampleData from './feed-example-data.js';
import TwitterFeedTile from './TwitterFeedTile.jsx';
import YouTubeFeedTile from './YouTubeFeedTile.jsx';

console.log(feedExampleData);

var Feed = (props) => {
  var logout = () => {
    Auth.logout(() => {
      props.history.push('/');
    })
  }

  const [ exampleData, setExampleData ] = useState(feedExampleData);
  // setExampleData(feedExampleData);

  return (
    <div>
      <div>
        Hi from feed
        <button onClick={logout}>Logout</button>
        <Link to='/Analytics/Analytics'>Analytics</Link>
      </div>
      <div>
        {console.log(exampleData)}
        {exampleData.map((post, index) => {
          if (post.platform === 'youtube') {
            <YouTubeFeedTile postData={post}/>
          }
          if (post.platform === 'twitter') {
            <TwitterFeedTile postData={post}/>
          }
        })}
      </div>
    </div>
  )
}

export default Feed;