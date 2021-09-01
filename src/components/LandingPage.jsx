import React from 'react';
import Auth from './Auth.js';
import config from '../../env/config.js';
import GoogleLogin from 'react-google-login';

import '../landingStyle.css';

var LandingPage = (props) => {

  var login = () => {
    Auth.login(() => {
      props.history.push('/feed');
    })
  }

  const responseGoogle = (response) => {
    console.log(response);

    Auth.login(() => {
      props.history.push('/feed');
    })
  }

  return (
    <div>
      <div className='header'></div>
      <div className='body'>
        <div>
          <img src="Feedsense.JPG" className='logo'></img>
        </div>
        <div className='center'>
          <div className='wordsBig'>Feedsense</div>
          <div className='wordsSmoll'>the social media aggregator</div>
        </div>
        <div className='center'>
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
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
        </div>
        <div className='loginSubHead'>
          Please login with google
        </div>
      </div>
      <div className='footer'></div>

    </div>
  )
};

export default LandingPage;

