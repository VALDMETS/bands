import React from 'react';
import { Link, hashHistory } from 'react-router';
import store from '../store';

const Header = React.createClass({
  render: function() {
    let rootPage = location.hash.slice(1,6) + '/overlay/';
    let aboutLink = rootPage + 'about';
    let loginLink = rootPage + 'login';
    let loginHTML = <Link className="login-button" to={loginLink}>Login</Link>
    if (store.session.get('username') !== 'anonymous') {
      loginLink = rootPage + 'logout';
      loginHTML = <Link className="login-button" to={loginLink}>Logout</Link>
    }
    let artistSearch = <Link className="artist-search" to="/find">Artist Search</Link>;
    if (location.hash.indexOf('find') !== -1) {
      artistSearch = '';
    }
    return (
      <header>
        <div className="nav-menu">
          <Link className="about" to={aboutLink}>About</Link>
          {loginHTML}
          <h2 onClick={this.homeFunction}>Schlubb's</h2>
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
