import React from 'react';
import Auth from './Auth.js'

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
    </div>
  )
}

export default Feed;
