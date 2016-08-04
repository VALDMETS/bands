import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import store from './store';
import settings from './settings';
import router from './components/router';

$(document).ajaxSend(function(e, xhr, jqueryAjax){
  if (!jqueryAjax.url.includes('spotify')) {
    if (store.session.get('authtoken')) {
      xhr.setRequestHeader('Authorization', 'Kinvey ' + store.session.get('authtoken'));
    } else {
      xhr.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
    }
  }
});

store.session.save({username: 'anonymous', password: 'password'}, {
  success: function (user, resp) {
    store.session.unset('password');
    store.session.set({
      username: 'admin',
      authtoken: resp._kmd.authtoken
    });
    // VVV TEMPORARY VVV
    store.voteList.fetch().then(function(){
      console.log(store.voteList);
    });

  },
  error: function () {
    console.log('Whoops! Looks like you need to sign up.');
  }
});

ReactDOM.render(router, document.getElementById('container'))
