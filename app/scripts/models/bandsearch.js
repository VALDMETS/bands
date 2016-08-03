import $ from 'jquery';
import Bb from 'backbone';

const BandSearch = Bb.Model.extend({
  urlRoot: 'https://api.spotify.com/v1/search?q=black&type=artist',
  success: function(resp) {
    console.log(resp);
  }
});

let bandSearch = new BandSearch();
bandSearch.fetch();

console.log(bandSearch);

export default BandSearch;
