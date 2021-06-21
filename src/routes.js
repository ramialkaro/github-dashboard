import React from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import Followers from './views/Followers';
import Following from './views/Following';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/followers" component={Followers} />
        <Route path="/following" component={Following} />
      </Switch>
    </Router>
  );
};

export default Routes;
