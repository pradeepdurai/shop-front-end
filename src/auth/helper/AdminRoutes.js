import React from 'react';
import {Route, Redirec} from 'react-router-dom';
import { isAuthenticated } from './index';

const AdminRoute =({ conponent : Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={ props =>
          isAuthenticated() && isAuthenticated().user.role === 1 ? ( <Component {...props}/>) : 
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

  export default AdminRoute;