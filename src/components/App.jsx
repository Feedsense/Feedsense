import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute.jsx'
import LandingPage from './LandingPage.jsx';
import Feed from './feed/Feed.jsx';
import Analytics from './analytics/Analytics.jsx';

var App = () => {
  const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false)

  return (
    <div className='mainContainer'>
      <Router>
        <Switch>
          <Route exact path="/">
            {isGoogleSignedIn ?
            <Redirect to='/feed'/> :
            <LandingPage
              setIsGoogleSignedIn={setIsGoogleSignedIn}
              isGoogleSignedIn={isGoogleSignedIn}/>}
          </Route>
          <ProtectedRoute
            exact
            path="/feed"
            component={Feed}
            data={{
              isGoogleSignedIn: isGoogleSignedIn,
              setIsGoogleSignedIn: setIsGoogleSignedIn
            }}/>
          <ProtectedRoute
            path="/Analytics/Analytics"
            component={Analytics}
            data={{
              isGoogleSignedIn: isGoogleSignedIn,
              setIsGoogleSignedIn: setIsGoogleSignedIn
            }}/>
          <Route to='*' component={() => ('404 not found')}/>
        </Switch>
      </Router>
    </div>
  )
};

export default App;