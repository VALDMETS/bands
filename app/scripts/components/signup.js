import React from 'react';
import {hashHistory} from 'react-router';
// import $ from 'jquery';
import store from '../store';
import settings from '../settings';

const Signup = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Ready to vote for your favorite artists?</h3>
        <p>Create a new account!</p>
        <form onSubmit={this.submitFunction}>
          {this.incorrectAlert}
          <input type="text" ref="signupname" placeholder="new username"/>
          <input type="password" ref="signuppass" placeholder="password"/>
          <input type="submit" value="submit"/>
        </form>
        <p>We guarantee that we won't share your information with any third parties. We just want you to be able to rock out!</p>
      </div>
    )
  },
  submitFunction: function(e) {
    e.preventDefault();
    store.session.set({
      authtoken: ''
    });
    console.log(store.session);
    store.session.save({username: this.refs.signupname.value, password: this.refs.signuppass.value}, {
      url: `https://baas.kinvey.com/user/${settings.appKey}/`,
      success: (user, resp) => {
        store.session.unset('password');
        store.session.set({
          authtoken: resp._kmd.authtoken,
          urlRoot: `https://baas.kinvey.com/user/${settings.appKey}/login`
        });
        hashHistory.push(location.hash.slice(1,6))
      },
      error: () => {
        store.session.set({username: 'anonymous'});
        this.incorrectAlert = <p className="incorrect-alert">Sorry, your username is taken. Please try another one.</p>;
        this.setState({change: true});
      }
    });
  },
  incorrectAlert: ''
});

export default Signup;
