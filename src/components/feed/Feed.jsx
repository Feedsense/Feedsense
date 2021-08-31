import React, { useState, useEffect } from 'react';
import config from '../../../env/config.js';
import Auth from '../Auth.js';
import {Switch, Link} from 'react-router-dom';
import feedExampleData from './feed-example-data.js';
import TwitterFeedTile from './TwitterFeedTile.jsx';
import YouTubeFeedTile from './YouTubeFeedTile.jsx';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import '../../style.css';

var Feed = (props) => {

  const [ exampleData, setExampleData ] = useState(feedExampleData);
  // setExampleData(feedExampleData);

  const {signIn} = useGoogleLogin({
    onSuccess: (res) => console.log(res),
    clientId: config.clientId,
    isSignedIn: true,
    onFailure: (err) => console.log(err),
  })

  const history = useHistory();

  var logout = () => {
    Auth.logout(() => {
      history.push('/');
    })
  }

  useEffect(() => {
    signIn()
  }, [])

  return (
    <div>

      <div className='header'>
        <div>
          <h1 >Feedsense</h1>
        </div>
        <div className='navButtonContainer'>
          <Link to='/Analytics/Analytics'>Analytics</Link>
          <a>Post</a>
          <a onClick={() => {
            const auth2 = window.gapi.auth2.getAuthInstance()
            if (auth2 != null) {
              auth2.signOut().then(
                auth2.disconnect()
              )
            }
            localStorage.clear();
            logout()
          }
          }>logout</a>
        </div>
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
