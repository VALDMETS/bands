import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import store from './store';
import settings from './settings';
import router from './components/router';

location.hash = 'main';

$(document).ajaxSend(function(e, xhr, jqueryAjax){
  if (!jqueryAjax.url.includes('spotify')) {
    if (store.session.get('authtoken')) {
      xhr.setRequestHeader('Authorization', 'Kinvey ' + store.session.get('authtoken'));
    } else {
      xhr.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
    }
  }
});

settings.anonymousLogin();

ReactDOM.render(router, document.getElementById('container'))
