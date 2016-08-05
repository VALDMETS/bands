import React from 'react';
import {Link} from 'react-router';

const Login = React.createClass({
  render: function(){
    let signupRoute = location.hash.slice(1,6) + '/overlay/signup';
    return (
      <div>
        <h3>Ready to vote for your favorite artists?</h3>
        <p>In order to keep things fair, we ask that you log in below:</p>
        <form>
          <input type="text" ref="loginname" placeholder="username"/>
          <input type="password" ref="loginpass" placeholder="password"/>
          <input type="submit" value="submit"/>
        </form>
        <p>Don't already have an account? <Link to={signupRoute}>Click here</Link> to sign up!</p>
      </div>
    )
  }
});

export default Login;
