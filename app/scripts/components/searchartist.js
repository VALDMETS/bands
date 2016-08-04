import React from 'react';
import {hashHistory} from 'react-router';

import store from '../store';
import Band from '../models/band';

const SearchArtist = React.createClass({
  render: function() {
    let bandPic = 'http://www.iconsdb.com/icons/preview/orange/question-mark-4-xl.png';
    if (this.props.info.images.length) {
      bandPic = this.props.info.images[0].url
    }
    return (
      <div onClick={this.clickHandler} className="search-artist">
        <div>
          <img src={bandPic}/>
        </div>
        <span>{this.props.info.name}</span>
      </div>
    )
  },
  clickHandler: function() {
    let newBand = new Band ({
      name: this.props.info.name,
      spotifyId: this.props.info.id,
      imageUrl: this.props.info.images[0].url,
      popularity: this.props.info.popularity,
      externalUrl: this.props.info.external_urls.spotify,
      votes: [store.session.get('username')]
    });
    console.log(newBand);
    if (store.voteList.get(newBand.get('spotifyId'))) {
      let bandInVoteList = store.voteList.get(newBand.get('spotifyId'));
      let voteAdder = bandInVoteList.get('votes');
      voteAdder.push(store.session.get('username'));
      bandInVoteList.save({votes: voteAdder}).then(() => {
        hashHistory.push('/main');
        store.voteList.fetch();
      });
    } else {
      newBand.save().then(() => {
        hashHistory.push('/main');
        store.voteList.fetch();
      });

    }
  }
});

export default SearchArtist;
