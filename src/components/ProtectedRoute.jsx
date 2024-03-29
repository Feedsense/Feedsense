import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from './Auth.js'

var ProtectedRoute = ({component: Component, data, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth.isAuthenticated()) {
          return <Component {...props} {...data} />
        } else {
          return (
            <Redirect to={
              {
                pathname: '/',
                state: {
                  from: props.location
                }
              }
            }
            />
          )
        }
      }}
    />
  );
};

export default ProtectedRoute;