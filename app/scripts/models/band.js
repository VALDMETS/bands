import $ from 'jquery';
import Bb from 'backbone';
import settings from '../settings';

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
    externalUrl: ''
  },
  idAttribute: 'spotifyId'
});

export default Band;
