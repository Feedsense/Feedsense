import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute.js'
import LandingPage from './LandingPage.jsx';
import Feed from './feed/Feed.jsx';
import Analytics from './analytics/Analytics.jsx';

var App = () => {

  var [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className='mainContainer'>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <ProtectedRoute exact path="/feed" component={Feed}/>
          <ProtectedRoute exact path="/Analytics/Analytics" component={Analytics}/>
          <Route to='*' component={() => ('404 not found')}/>
        </Switch>
      </Router>
    </div>
  )
};

export default App;