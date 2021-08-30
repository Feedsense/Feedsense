import React from 'react';
import Auth from './Auth.js';
import config from '../../env/config.js';
import GoogleLogin from 'react-google-login';


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