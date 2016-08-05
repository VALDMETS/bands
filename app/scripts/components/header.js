import React from 'react';
import { Link, hashHistory } from 'react-router';

const Header = React.createClass({
  render: function() {
    let rootPage = location.hash.slice(1,6) + '/overlay/';
    let aboutLink = rootPage + 'about';
    let loginLink = rootPage + 'login';
    let signupLink = rootPage + 'signup';
    let artistSearch = <Link to="/find">Artist Search</Link>;
    if (location.hash.indexOf('find') !== -1) {
      artistSearch = '';
    }
    return (
      <header>
        <div className="nav-menu">
          <li><Link to={aboutLink}>About</Link></li>
          <li><Link to={loginLink}>Login</Link></li>
          <li><Link to={signupLink}>Signup</Link></li>
          <h2 onClick={this.homeFunction}>Schlubb's Logo!</h2>
          {artistSearch}
        </div>
      </header>
    )
  },
  homeFunction: function() {
    hashHistory.push('/main');
  }
});

export default Header;
