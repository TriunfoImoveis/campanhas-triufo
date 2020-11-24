import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Campain from '../pages/Campain';
// import Maintenance from '../pages/Maintenance';

const Routes = () => (
  <Switch>
    {/* <Route path="/" exact component={Maintenance} /> */}
    
    <Route path="/" exact component={Campain} />
  </Switch>
);

export default Routes;
