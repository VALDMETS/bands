import $ from 'jquery';
import Bb from 'backbone';
import _ from 'underscore';
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
    let alreadyVoted = this.get('votes').filter(function(voterName){
      if (store.session.get('username') === voterName) {
        return true
      } else {
        return false
      }
    });
    if (!alreadyVoted.length) {
      let voteAdder = this.get('votes');
      voteAdder.push(store.session.get('username'));
      this.save({votes: voteAdder}).then(() => {
        hashHistory.push('/main');
        store.voteList.fetch();
      });
    } else {
      let voteSubtractor = _.without(this.get('votes'), store.session.get('username'));
      this.save({votes: voteSubtractor}).then(() => {
        hashHistory.push('/main');
        store.voteList.fetch();
      });

    }
  },
});

export default Band;
