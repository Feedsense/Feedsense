import React, { useState, useEffect } from 'react';
import {Switch, Link, useHistory} from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import axios from 'axios';

import config from '../../../env/config.js';
import feedExampleData from './feed-example-data.js';
import TwitterFeedTile from './TwitterFeedTile.jsx';
import YouTubeFeedTile from './YouTubeFeedTile.jsx';
import Header from '../Header.jsx';

import '../../feedStyle.css';
import '../../style.css';

var Feed = ({ setIsGoogleSignedIn }) => {

  const [ exampleData, setExampleData ] = useState(feedExampleData);
  const [ youtubeVideos, setYoutubeVideos ] = useState([]);

  useEffect(() => {
    if( localStorage.access_token) {
      axios.get(`/getYoutube/${localStorage.access_token}`)
        .then(data => {
          setYoutubeVideos(data);
        })
        .catch( err => {
          console.error('ERROR RETRIEVING DATA: ', err.stack);
        });
    }
  }, [])

  return (
    <div>
      <div className='header'>
        <Header setIsGoogleSignedIn={setIsGoogleSignedIn}/>
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