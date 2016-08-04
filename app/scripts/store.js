import BandSearch from './models/bandsearch';
import Session from './models/session';

import VoteList from './collections/votelist';

export default {
  bandSearch: new BandSearch(),
  session: new Session(),
  voteList: new VoteList()
};
