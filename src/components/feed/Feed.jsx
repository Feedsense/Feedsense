import React, { useState, useEffect } from 'react';
import config from '../../../env/config.js';
import Auth from '../Auth.js';
import {Switch, Link} from 'react-router-dom';
import feedExampleData from './feed-example-data.js';
import TwitterFeedTile from './TwitterFeedTile.jsx';
import YouTubeFeedTile from './YouTubeFeedTile.jsx';
import '../../feedStyle.css';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import '../../style.css';
// import TWModalViewer from '../modals/TW-modal/modalViewer.jsx'
import YTModalViewer from '../modals/YT-modal/useModal.jsx'
import YTModal from '../modals/YT-modal/Modal.jsx'
import TWModalViewer from '../modals/TW-modal/useModal.jsx'
import TWModal from '../modals/TW-modal/Modal.jsx'

var Feed = ({ setIsGoogleSignedIn }) => {

  const {isYTShowing, toggleYT} = YTModalViewer();

  const {isTWShowing, toggleTW} = TWModalViewer();

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

  var logout = () => {
    Auth.logout(() => {
      history.push('/');
    })
  }

  useEffect(() => {
    signIn()
    setIsGoogleSignedIn(true);
  }, [])

  return (
    <div>

      <div className='header'>
        <div>
          <h1 >Feedsense</h1>
        </div>
        <div className='navButtonContainer'>
          <Link to='/Analytics/Analytics'>Analytics</Link>
          <button onClick={toggleYT}>Post a Video</button>
          <YTModal
            isYTShowing={isYTShowing}
            hide={toggleYT}
          />
          <button onClick={toggleYT}>Post A Tweet</button>
          <TWModal
            isYTShowing={isYTShowing}
            hide={toggleYT}
          />
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