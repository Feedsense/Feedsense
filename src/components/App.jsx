import React, { useState } from 'react';
import {HashRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute.js'
import LandingPage from './LandingPage.jsx';
import Feed from './Feed.jsx';
import Analytics from './Analytics/Analytics.jsx';


var App = () => {

  const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false)

  return (
    <div className='mainContainer'>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage 
              setIsGoogleSignedIn={setIsGoogleSignedIn}
              isGoogleSignedIn={isGoogleSignedIn}/>
          </Route>
          <ProtectedRoute exact path="/feed">
            <Feed 
            setIsGoogleSignedIn={setIsGoogleSignedIn}
            isGoogleSignedIn={isGoogleSignedIn}/>
          </ProtectedRoute>
          <ProtectedRoute exact path="/Analytics/Analytics" component={Analytics}/>
          <Route to='*' component={() => ('404 not found')}/>
        </Switch>
      </Router>
    </div>
  )
};

export default App;