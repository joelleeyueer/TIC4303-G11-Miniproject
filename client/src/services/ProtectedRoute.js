import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from './AuthService';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    if (!AuthService.isLoggedIn()) {
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }

    return <Component {...props} />
  }} />
);

export default ProtectedRoute;
