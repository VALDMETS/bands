import React from 'react';
import $ from 'jquery';

import store from '../store';
import settings from '../settings';

const Logout = React.createClass({
  render: function() {
    return (
      <div>
        <h3>You have successfully logged out.</h3>
      </div>
    )
  },
  componentDidMount: function() {
    $.ajax({
      url: `https://baas.kinvey.com/user/${settings.appKey}/_logout`,
      type: "POST",
      success: () => {
        settings.anonymousLogin();
      }
    });
  },
  anonymousLogin: function() {
    store.session.set({authtoken: ''});
    store.session.save({username: 'anonymous', password: 'password'}, {
      success: function (user, resp) {
        store.session.unset('password');
        store.session.set({
          username: 'anonymous',
          authtoken: resp._kmd.authtoken
        });
        // VVV TEMPORARY VVV
        store.voteList.fetch().then(function(){

        });
      },
    });
  }
});

export default Logout;
