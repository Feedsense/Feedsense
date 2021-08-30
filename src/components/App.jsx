import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute.js'
import LandingPage from './LandingPage.jsx';
import Feed from './Feed.jsx';
import Analytics from './Analytics/Analytics.jsx';


var App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <ProtectedRoute exact path="/feed" component={Feed}/>
        <ProtectedRoute exact path="/Analytics" component={Analytics}/>
        <Route to='*' component={() => ('404 not found')}/>
      </Switch>
    </div>
  )
};

export default App;