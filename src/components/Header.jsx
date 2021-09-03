import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import config from '../../env/config.js';
import Auth from './Auth.js';
import {Switch, Link, useHistory} from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import Modal from './modals/Modal.jsx';
import '../header.css'

var Header = ({ setIsGoogleSignedIn }) => {
  const [ showModal, setShowModal ] = useState(false);

  const history = useHistory();

  const {signIn} = useGoogleLogin({
    onSuccess: (res) => {
      console.log(res)
    },
    clientId: config.clientId,
    isSignedIn: true,
    onFailure: (err) => console.log(err),
  })

  var logout = () => {
    Auth.logout(() => {
      history.push('/');
    })
  }

  useEffect(() => {
    signIn()
    setIsGoogleSignedIn(true);
  }, [])

  return (
    <div>
      <div className='headercontainer'>
        <div className='headerTitle'>
          <h1 >Feedsense</h1>
        </div>
        <div className='navButtonContainer'>
          <Link to='/feed' className='navButton'>Feed</Link>
          <Link to='/Analytics/Analytics/dashboard' className='navButton'>Analytics</Link>
          <div onClick={()=>{setShowModal(!showModal)}} className='navButton'>Post</div>
          {showModal ? ReactDOM.createPortal(<Modal show={setShowModal}/>, document.body) : null}
          <a className='navButton' onClick={() => {
            setIsGoogleSignedIn(false);
            const auth2 = window.gapi.auth2.getAuthInstance()
            if (auth2 != null) {
              auth2.signOut().then(
                auth2.disconnect()
              )
            }
            localStorage.clear();
            logout();
          }
          }>logout</a>
        </div>
      </div>
    </div>
  );
}

export default Header;