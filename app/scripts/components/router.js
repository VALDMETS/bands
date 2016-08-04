import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import SearchPage from './searchpage';
import MainPage from './mainpage';

const router = (
  <Router history={hashHistory}>
    <Route path="/main" component={MainPage}/>
    <Route path="/search" component={SearchPage}/>
  </Router>
)

export default router;
