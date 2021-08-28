import React from 'react';
import Auth from './Auth.js'

var Analytics = (props) => {
  var logout = () => {
    Auth.logout(() => {
      props.history.push('/');
    })
  }

  return (
    <div>
      Hi from Analytics
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Analytics;