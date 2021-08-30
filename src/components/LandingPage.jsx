import React from 'react';
import Auth from './Auth.js'
import { GoogleLogin } from 'react-google-login';

var LandingPage = (props) => {

  const responseGoogle = (res) => {
    console.log(res)
    Auth.login(() => {
      props.history.push('/feed');
    })
  }
  
  return (
    <div>
      Hello World
      <button onClick={login}>Login</button>
      <GoogleLogin
        clientId="600013893616-bdhqvs5cbrnmjoucotaj1jt2tg5k4vbh.apps.googleusercontent.com"
        buttonText="Login"
        redirectUri='http://localhost:3000/feed'
        onSuccess={login}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
};

export default LandingPage;