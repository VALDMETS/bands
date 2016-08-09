import store from './store';

export default {
  baseUrl: 'https://baas.kinvey.com',
  appKey: 'kid_r1Kqx01F',
  appSecret: '4a60dd982f2947f1920ac4c53d2a1c5c',
  basicAuth: btoa('kid_r1Kqx01F:4a60dd982f2947f1920ac4c53d2a1c5c'),

  anonymousLogin: function() {
    store.session.set({authtoken: ''});
    store.session.save({username: 'anonymous', password: 'password'}, {
      success: function (user, resp) {
        store.session.unset('password');
        store.session.set({
          username: 'anonymous',
          authtoken: resp._kmd.authtoken
        });
        store.voteList.fetch();
      },
    });
    return true;
  }
};
