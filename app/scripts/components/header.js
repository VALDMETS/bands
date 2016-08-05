import React from 'react';
import { Link, hashHistory } from 'react-router';
import store from '../store';

const Header = React.createClass({
  render: function() {
    let rootPage = location.hash.slice(1,6) + '/overlay/';
    let aboutLink = rootPage + 'about';
    let loginLink = rootPage + 'login';
    let loginHTML = <li><Link to={loginLink}>Login</Link></li>
    if (store.session.get('username') !== 'anonymous') {
      loginLink = rootPage + 'logout';
      loginHTML = <li><Link to={loginLink}>Logout</Link></li>
    }
    let artistSearch = <Link to="/find">Artist Search</Link>;
    if (location.hash.indexOf('find') !== -1) {
      artistSearch = '';
    }
    return (
      <header>
        <div className="nav-menu">
          <li><Link to={aboutLink}>About</Link></li>
          {loginHTML}
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
