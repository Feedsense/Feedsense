import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from './Auth.js';
import config from '../../env/config.js';
import { GoogleLogin } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';

import '../landingStyle.css';

var LandingPage = ({ isGoogleSignedIn, setIsGoogleSignedIn }) => {
  const history = useHistory();

  const [accessToken, setAccessToken] = useState('');
  const [idToken, setIdToken] = useState('');
  const [googleId, setGoogleId] = useState('');
  const [email, setEmail] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const responseGoogle = (response) => {

    setAccessToken(response.tokenObj.access_token);
    setIdToken(response.tokenObj.id_token);
    setGoogleId(response.googleId);
    setEmail(response.profileObj.email);
    setFamilyName(response.profileObj.familyName);
    setGivenName(response.profileObj.givenName);
    setImageUrl(response.profileObj.imageUrl);

    localStorage.clear();
    localStorage.access_token = response.tokenObj.access_token;
    localStorage.id_token = response.tokenObj.id_token;
    localStorage.google_id = response.googleId;
    localStorage.email = response.profileObj.email;
    localStorage.family_name = response.profileObj.familyName;
    localStorage.given_name = response.profileObj.givenName;
    localStorage.image_url = response.profileObj.imageUrl;

    Auth.login(() => {
      history.push('/feed');
    })
  }


  return (
    <div className='landing-page'>
      <div className='body'>
        <div className='logohold'>
          <img src="Feedsenser.png" className='logo'></img>
        </div>
        <div className='center'>
          <div className='wordsBig'>Feedsense</div>
          <div className='wordsSmoll'>the social media aggregator</div>
        </div>
        <div className='btn-center'>
          <GoogleLogin
              clientId={config.clientId}
              render={renderProps => (
                <div id="customBtn" className="customGPlusSignIn" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <span className="icon"></span>
                  <span className="buttonText">Login</span>
                </div>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={()=>{return console.error('ERROR WITH OAUTH ID')}}
              cookiePolicy={'single_host_origin'}
              isSignedIn={false}
              scope='https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/yt-analytics.readonly https://www.googleapis.com/auth/yt-analytics-monetary.readonly https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly'
            />
        </div>
        <div className='loginSubHead'>
          Please login with google
        </div>
      </div>
   </div>
  )
};

export default LandingPage;

