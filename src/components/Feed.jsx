import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from './Auth.js';
import {Switch, Link} from 'react-router-dom';
import config from '../../env/config.js';
import '../style.css';
import { useGoogleLogin } from 'react-google-login';



var Feed = ({ setIsGoogleSignedIn, isGoogleSignedIn }) => {

  console.log(isGoogleSignedIn);

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
        <div className='logo'>
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

    </div>
  )
}

export default Feed;
