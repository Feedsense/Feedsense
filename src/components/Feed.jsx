import React from 'react';
import Auth from './Auth.js';
import {Switch, Link} from 'react-router-dom';
import '../style.css';

var Feed = (props) => {
  var logout = () => {
    Auth.logout(() => {
      props.history.push('/');
    })
  }

  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <h1 >Feedsense</h1>
        </div>
        <div className='navButtonContainer'>
          <Link to='/Analytics/Analytics'>Analytics</Link>
          <a>Post</a>
          <a onClick={logout}>logout</a>
        </div>
      </div>
    </div>
  )
}

export default Feed;
