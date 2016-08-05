import React from 'react';
import {Link} from 'react-router';
import _ from 'underscore'

import Header from './header';
import RankArtist from './rankartist';
import store from '../store';

const MainPage = React.createClass({
  getInitialState: function() {
    if (!store.voteList.models.length) {
      return {}
    } else {
      let tempState = {};
      store.voteList.forEach(function(bandModel, i){
        tempState[i] = bandModel.toJSON();
      });
      return tempState;
    }
  },
  render: function() {
    if (this.state) {
      let bandList = _.map(this.state, function(band, i){
        return <RankArtist key={i} info={band} />
      });
      return(
        <div className="rank-page">
          <Header/>
          <h2>TOP ARTISTS FOR SCHLUBB'S BBQ STAGE</h2>
          <div className="rank-container">
            {bandList}
          </div>
          <footer>
            <p>Don't see your favorite band? <Link to="/find">Click here</Link> to add them!</p>
          </footer>
          {this.props.children}
        </div>
      )
    } else {
      return null;
    }
  },
  componentDidMount: function() {
    store.voteList.on('update', this.updateFunction)
  },
  componentWillUnmount: function() {
    store.voteList.off('update', this.updateFunction)
  },
  updateFunction: function() {
    this.setState(store.voteList.toJSON());
  },
});

export default MainPage;
