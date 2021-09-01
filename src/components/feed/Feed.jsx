<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
import config from '../../../env/config.js';
>>>>>>> 6af3cda8f4c06708885aab0ed8a5c3900c93be5d
import Auth from '../Auth.js';
import {Switch, Link} from 'react-router-dom';
import feedExampleData from './feed-example-data.js';
import TwitterFeedTile from './TwitterFeedTile.jsx';
import YouTubeFeedTile from './YouTubeFeedTile.jsx';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import '../../style.css';

var Feed = ({ setIsGoogleSignedIn }) => {

  const [ exampleData, setExampleData ] = useState(feedExampleData);

  const history = useHistory();

  const {signIn} = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res)
    },
    clientId: config.clientId,
    isSignedIn: true,
    onFailure: (err) => console.log(err),
  })

<<<<<<< HEAD
console.log(feedExampleData);

var Feed = (props) => {
=======
>>>>>>> 6af3cda8f4c06708885aab0ed8a5c3900c93be5d
  var logout = () => {
    Auth.logout(() => {
      history.push('/');
    })
  }

<<<<<<< HEAD
  const [ exampleData, setExampleData ] = useState(feedExampleData);
  // setExampleData(feedExampleData);
=======
  useEffect(() => {
    signIn()
    setIsGoogleSignedIn(true);
  }, [])
>>>>>>> 6af3cda8f4c06708885aab0ed8a5c3900c93be5d

  return (
    <div>

      <div className='header'>
        <div>
          <h1 >Feedsense</h1>
        </div>
        <div className='navButtonContainer'>
          <Link to='/Analytics/Analytics'>Analytics</Link>
          <a>Post</a>
          <a className='logout-btn' onClick={() => {
            setIsGoogleSignedIn(false);
            const auth2 = window.gapi.auth2.getAuthInstance()
            if (auth2 != null) {
              auth2.signOut().then(
                auth2.disconnect()
              )
            }
            localStorage.clear();
            logout();
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