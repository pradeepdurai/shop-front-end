import React from 'react';
import {Route, Redirec} from 'react-router-dom';
import { isAuthenticated } from './index';

const PrivateRoute =({ conponent : Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={ props =>
          isAuthenticated() ? ( <Component {...props}/>) : 
          (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;