import React from 'react';
import {hashHistory} from 'react-router';

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
      <div onClick={this.clickHandler} className="rank-artist" id={this.props.info.spotifyId}>
        {votedArrow}
        <span className="vote-total">{this.props.info.votes.length}</span>
        <div>
          <img src={this.props.info.imageUrl}/>
        </div>
        <span>{this.props.info.name}</span>
      </div>
    )
  },
  clickHandler: function() {
    if (store.session.get('username') != 'anonymous' ) {
      store.voteList.get(this.props.info.spotifyId).voteToggle();
    } else {
      hashHistory.push('/main/overlay/login');
    }
  }
});

export default RankArtist;
