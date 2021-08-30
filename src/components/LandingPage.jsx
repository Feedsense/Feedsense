import React, { useState, useEffect } from 'react';
import Auth from './Auth.js';
import config from '../../env/config.js';
import GoogleLogin from 'react-google-login';


var LandingPage = (props) => {

  const [accessToken, setAccessToken] = useState('');
  const [idToken, setIdToken] = useState('');
  const [googleId, setGoogleId] = useState('');
  const [email, setEmail] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const responseGoogle = (response) => {
    console.log(response);
    setAccessToken(response.tokenObj.access_token);
    setIdToken(response.tokenObj.id_token);
    setGoogleId(response.googleId);
    setEmail(response.profileObj.email);
    setFamilyName(response.profileObj.email);
    setGivenName(response.profileObj.givenName);
    setImageUrl(response.profileObj.imageUrl);

    Auth.login(() => {
      props.history.push('/feed');
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
      />
    </div>
  )
};

export default LandingPage;