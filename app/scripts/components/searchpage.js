import React from 'react';

import store from '../store';

const SearchPage = React.createClass({
  getInitialState: function() {
    return store.bandSearch.toJSON();
  },
  render: function() {
    let searchList = <span>durp</span>;
    return (
      <div className="search-results">
        {searchList}
      </div>
    )
  },
  componentDidMount: function() {
    store.bandSearch.on('change', this.updateFunction)
  },
  componentWillUnmount: function() {
    store.bandSearch.off('change', this.updateFunction)
  },
  updateFunction: function() {
    this.setState(store.bandSearch.toJSON());
  }
});

export default SearchPage
