import React from 'react';

const Overlay = React.createClass({
  render: function(){
    return (
      <div className="overlay">
        <div className="overlay-window">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Overlay;
