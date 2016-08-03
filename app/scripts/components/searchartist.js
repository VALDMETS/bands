import React from 'react';

import Band from '../models/band';

const SearchArtist = React.createClass({
  render: function() {
    return (
      <li onClick={this.clickHandler} className="search-artist">
        {this.props.info.name}
      </li>
    )
  },
  clickHandler: function() {
    // console.log(this.props.info);
    let newBand = new Band ({
      name: this.props.info.name,
      spotifyId: this.props.info.id,
      imageUrl: this.props.info.images[0].url,
      popularity: this.props.info.popularity,
      externalUrl: this.props.info.external_urls.spotify
    });
    console.log(newBand);
    newBand.save();
  }
});

export default SearchArtist;
