import React, { useState } from 'react';
import Auth from '../Auth.js';
import {Switch, Link} from 'react-router-dom';
import feedExampleData from './feed-example-data.js';
import TwitterFeedTile from './TwitterFeedTile.jsx';
import YouTubeFeedTile from './YouTubeFeedTile.jsx';
import '../../feedStyle.css';

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
        {exampleData.map((post, index) => {
          if (post['platform'] === 'youtube') {
            return <YouTubeFeedTile key={index} postData={post}/>
          }
          if (post['platform'] === 'twitter') {
            return <TwitterFeedTile key={index} postData={post}/>
          }
        })}
      </div>
    </div>
  );
}

export default Feed;