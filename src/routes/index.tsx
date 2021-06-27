import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from '../pages/Admin';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default Routes;
