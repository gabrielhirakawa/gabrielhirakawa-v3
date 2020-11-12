import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home';

function routes() {
  return <BrowserRouter>
  <Switch>
      <Route path="/" exact component={Home} />
      <Route component={Home} />
  </Switch>
  </BrowserRouter>;
}

export default routes;