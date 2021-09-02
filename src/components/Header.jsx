import React, { useState, useEffect } from 'react';
import config from '../../env/config.js';
import Auth from './Auth.js';
import {Switch, Link, useHistory} from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import Modal from './modals/Modal.jsx';
import ModalViewer from './modals/useModal.jsx'


var Header = ({ setIsGoogleSignedIn }) => {

  const {isShowing, toggle} = ModalViewer();

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

      <div className='header'>
        <div>
          <h1 >Feedsense</h1>
        </div>
        <div className='navButtonContainer'>
          <Link to='/feed'>Feed</Link>
          <Link to='/Analytics/Analytics/dashboard'>Analytics</Link>
          <button onClick={toggle}>Post a Video</button>
          <Modal
            isShowing={isShowing}
            hide={toggle}
          />
          <a className='logout-btn' onClick={() => {
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