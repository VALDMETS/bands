import React from 'react';
import {Link, hashHistory} from 'react-router';

import store from '../store';

const Login = React.createClass({
  getInitialState: function() {
    return null;
  },
  render: function(){
    let signupRoute = location.hash.slice(1,6) + '/overlay/signup';
    return (
      <div>
        <h3>Ready to vote for your favorite artists?</h3>
        <p>In order to keep things fair, we ask that you log in below:</p>
        <form onSubmit={this.submitFunction}>
          {this.incorrectAlert}
          <input type="text" ref="loginname" placeholder="username"/>
          <input type="password" ref="loginpass" placeholder="password"/>
          <input type="submit" value="submit"/>
        </form>
        <p>Don't already have an account? <Link to={signupRoute}>Click here</Link> to sign up!</p>
      </div>
    )
  },
  submitFunction: function(e) {
    e.preventDefault();
    store.session.save({username: this.refs.loginname.value, password: this.refs.loginpass.value}, {
      success: (user, resp) => {
        store.session.unset('password');
        store.session.set({
          username: this.refs.loginname.value,
          authtoken: resp._kmd.authtoken
        });
        hashHistory.push(location.hash.slice(1,6))
      },
      error: () => {
        store.session.set({username: 'anonymous'});
        this.incorrectAlert = <p className="incorrect-alert">Sorry, your username or password was incorrect. Please try again!</p>;
        this.setState({change: true});
      }
    });
  },
  incorrectAlert: ''
});

export default Login;
