import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import SearchPage from './searchpage';

const router = (
  <Router history={hashHistory}>
    <Route path="/search" component={SearchPage}/>
  </Router>
)

export default router;
