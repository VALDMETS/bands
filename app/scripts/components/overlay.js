import React from 'react';
import {hashHistory} from 'react-router'

const Overlay = React.createClass({
  render: function(){
    return (
      <div className="overlay">
        <div className="overlay-window">
          <input type="button" onClick={this.escapeFunction} value="X"/>
          {this.props.children}
        </div>
      </div>
    )
  },
  escapeFunction: function() {
    hashHistory.push(location.hash.slice(1,6))
  }
});

export default Overlay;
