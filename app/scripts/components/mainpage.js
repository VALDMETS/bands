import React from 'react';
import _ from 'underscore'

import RankArtist from './rankartist';
import store from '../store';

const MainPage = React.createClass({
  getInitialState: function() {
    return {}
  },
  render: function() {
    console.log(this.state);
    let bandList = _.map(this.state, function(band, i){
      return <RankArtist key={i} info={band} />
    });
    return(
      <div className="rank-page">
        <h2>TOP ARTISTS FOR SCHLUBB'S BBQ STAGE</h2>
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

export default MainPage;
