import React, { ComponentType } from 'react';
import {
  Redirect,
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';

import { useAuth } from '../hooks';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  if (isPrivate && !user.id) {
    return (
      <ReactRoute
        {...rest}
        render={({ location }) => (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )}
      />
    );
  }

  return <ReactRoute {...rest} render={() => <Component />} />;
};

export default Route;
