import React, { useState } from 'react';
import Auth from './Auth.js';
import {Switch, Link} from 'react-router-dom';
import exampleData from './feed-example-data.js';
import TwitterFeedTile from './TwitterFeedTile.jsx';
import YouTubeFeedTile from './YouTubeFeedTile.jsx';

var Feed = (props) => {
  var logout = () => {
    Auth.logout(() => {
      props.history.push('/');
    })
  }

  const [ exampleData, setExampleData ] = useState(exampleData);

  return (
    <div>
      <div>
        Hi from feed
        <button onClick={logout}>Logout</button>
        <Link to='/Analytics/Analytics'>Analytics</Link>
      </div>
      <div>
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
