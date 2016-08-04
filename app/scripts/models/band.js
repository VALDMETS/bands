import $ from 'jquery';
import Bb from 'backbone';
import React from 'react';
import {hashHistory} from 'react-router';
import settings from '../settings';
import store from '../store';

const Band = Bb.Model.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/bands`,
  headers: {
    Authorization: ('Basic ' + settings.basicAuth)
  },
  defaults: {
    name: '',
    spotifyId: '',
    imageUrl: '',
    popularity: 0,
    externalUrl: '',
    votes: []
  },
  idAttribute: 'spotifyId',
  voteToggle: function() {
    console.log(this);
    let voteAdder = this.get('votes');
    voteAdder.push(store.session.get('username'));
    this.save({votes: voteAdder}).then(() => {
      hashHistory.push('/main');
      store.voteList.fetch();
    });
  },
});

export default Band;
