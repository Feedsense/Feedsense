import React from 'react';
import Auth from './Auth.js'

var LandingPage = (props) => {

  var login = () => {
    Auth.login(() => {
      props.history.push('/feed');
    })
  }

  return (
    <div>
      Hello World
      <button onClick={login}>Login</button>
    </div>
  )
};

export default LandingPage;