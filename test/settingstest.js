import {expect} from 'chai';
import Bb from 'backbone';
import store from '../app/scripts/store';
import settings from '../app/scripts/settings';
import Session from '../app/scripts/models/session';

describe('Settings', function(){

  it('should exist', () => {
    expect(settings).to.exist;
  });

  it('should have an anonymousLogin function', () => {
    expect(settings.anonymousLogin()).to.exist;
  });

  it('should set session default user as anonymous', () => {
    // store.session = new Session();
    // settings.anonymousLogin();
    console.log(store.session.attributes.username);
    // console.log(store.session.get('authtoken'));
    expect(store.session.get('username')).to.equal('anonymous');
    expect(store.session.get('authtoken')).to.exist;
  });
});
