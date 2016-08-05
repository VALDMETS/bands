import React from 'react';

const Signup = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Ready to vote for your favorite artists?</h3>
        <p>Create a new account!</p>
        <form>
          <input type="text" ref="signupname" placeholder="new username"/>
          <input type="password" ref="signuppass" placeholder="password"/>
          <input type="submit" value="submit"/>
        </form>
        <p>We guarantee that we won't share your information with any third parties. We just want you to be able to rock out!</p>
      </div>
    )
  }
});

export default Signup;
