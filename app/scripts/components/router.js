import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import SearchPage from './searchpage';
import RankPage from './rankpage';

const router = (
  <Router history={hashHistory}>
    <Route path="/main" component={RankPage}/>
    <Route path="/search" component={SearchPage}/>
  </Router>
)

export default router;
