import React from 'react';

import store from '../store';
import Header from './header';
import SearchArtist from './searchartist';

const SearchPage = React.createClass({
  getInitialState: function() {
    return {
      artists: {
        items: []
      }
    };
  },
  render: function() {
    // console.log(this.state.artists.items);
    let searchList = this.state.artists.items.map(function(artist,i){
      return <SearchArtist key={i} info={artist} />
    });
    if (!searchList.length) {
      let blurb = 'Search for your favorite artist now!';
      if (!this.welcome) {
        blurb = 'Sorry! No results were found.'
      }
      searchList = <div className="search-blurb">{blurb}</div>
    }
    return (
      <div className="search-page">
        <Header/>
        <form onSubmit={this.submitFunction}>
          <input type="text" ref="searchinput" placeholder="Search for your favorite Artist!"/>
          <input type="submit" value="Go!"/>
        </form>
        <ul className="search-results">
          {searchList}
        </ul>
        {this.props.children}
      </div>
    )
  },
  componentDidMount: function() {
    this.welcome = 0;
    store.bandSearch.on('change', this.updateFunction)
  },
  componentWillUnmount: function() {
    store.bandSearch.off('change', this.updateFunction)
  },
  updateFunction: function() {
    this.setState(store.bandSearch.toJSON());
  },
  submitFunction: function(e) {
    e.preventDefault();
    let searchString = this.refs.searchinput.value
    store.bandSearch.fetch({
      data: {
        q: searchString,
        type: 'artist'
      }
    });
  },
  welcome: 1
});

export default SearchPage
