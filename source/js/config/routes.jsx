import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from 'views/Dashboard';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Dashboard } />
  </Switch>
);
