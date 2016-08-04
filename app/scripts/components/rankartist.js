import React from 'react';

import store from '../store';

const RankArtist = React.createClass({
  render: function() {
    let votedArrow = '';
    votedArrow = this.props.info.votes.map(function(voteName, i){
      if (store.session.get('username') === String(voteName)) {
        return <div className="voted-arrow" key={i}/>
      } else {
        return false;
      }
    });
    return (
      <div className="rank-artist" id={this.props.info.spotifyId}>
        {votedArrow}
        <span className="vote-total">{this.props.info.votes.length}</span>
        <div>
          <img src={this.props.info.imageUrl}/>
        </div>
        <span>{this.props.info.name}</span>
      </div>
    )
  },
  // clickHandler: function() {
  //   let newBand = new Band ({
  //     name: this.props.info.name,
  //     spotifyId: this.props.info.id,
  //     imageUrl: this.props.info.images[0].url,
  //     popularity: this.props.info.popularity,
  //     externalUrl: this.props.info.external_urls.spotify,
  //     votes: [store.session.get('username')]
  //   });
  //   console.log(newBand);
  //   if (store.voteList.get(newBand.get('spotifyId'))) {
  //     console.log('caught in the act');
  //     hashHistory.push('/main');
  //   } else {
  //     newBand.save();
  //     hashHistory.push('/main');
  //   }
  // }
});

export default RankArtist;
