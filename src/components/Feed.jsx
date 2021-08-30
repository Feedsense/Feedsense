import React from 'react';
import Auth from './Auth.js';
import {Switch, Link} from 'react-router-dom';

var Feed = (props) => {
  var logout = () => {
    Auth.logout(() => {
      props.history.push('/');
    })
  }

  return (
    <div>
      Hi from feed
      <button onClick={logout}>Logout</button>
        <Link to='/Analytics/Analytics'>Analytics</Link>
    </div>
  )
}

export default Feed;
