import Bb from 'backbone';
import Band from '../models/band';
import settings from '../settings';

const VoteList = Bb.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/bands`,
  model: Band,
  comparator: function(band) {
    return -1 * Number(band.get('votes').length)
  }
})

export default VoteList;
