import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from '../pages/Admin';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/admin" component={Admin} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
