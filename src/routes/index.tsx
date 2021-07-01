import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Admin from '../components/pages/Admin';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/admin" component={Admin} isPrivate />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
