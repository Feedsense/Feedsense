import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import LandingPage from './LandingPage.jsx';
import Feed from './Feed.jsx';


var App = () => {
  return (
    <div>
        <Route path="*" exact component={LandingPage}/>
        <Route path="/feed" exact component={Feed}/>
    </div>
  )
};

export default App;