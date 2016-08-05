import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import SearchPage from './searchpage';
import MainPage from './mainpage';
import Overlay from './overlay';
import About from './about';
import Login from './login';
import Signup from './signup';

const router = (
  <Router history={hashHistory}>
    <Route path="/main" component={MainPage}>
      <Route path="overlay" component={Overlay}>
        <Route path="about" component={About}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
      </Route>
    </Route>
    <Route path="/find" component={SearchPage}>
      <Route path="overlay" component={Overlay}>
        <Route path="about" component={About}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
      </Route>
    </Route>
  </Router>
)

export default router;
