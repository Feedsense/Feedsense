import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Auth from './Auth.js';
import config from '../../env/config.js';
import { GoogleLogin } from 'react-google-login';


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

    console.log(Auth.isAuthenticated());


    console.log(history);

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
    <div>
      Hello World

      <GoogleLogin
        clientId={config.clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        // redirectUri={Auth.login(() => history.push('/feed'))}
      />
    </div>
  )
};

export default LandingPage;