import React from 'react';

import RankArtist from './rankartist';
import store from '../store';

const RankPage = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    console.log(this.state);
    // console.log(this.state);
    let bandList = this.state.map(function(band, i){
      return <RankArtist key={i} info={band} />
    });
    return(
      <div className="rank-page">
        {bandList}
      </div>
    )
  },
  componentDidMount: function() {
    store.voteList.on('update', this.updateFunction)
  },
  componentWillUnmount: function() {
    store.voteList.off('update', this.updateFunction)
  },
  updateFunction: function() {
    this.setState(store.voteList.toJSON())
  },
});

export default RankPage;
