import $ from 'jquery';
import Bb from 'backbone';

import settings from '../settings';

const Session = Bb.Model.extend({
  defaults: {
    username: 'anonymous',
    // password: 'password'
    authtoken: '',
    signupDate: ''
  },
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}/login`

});

export default Session;
