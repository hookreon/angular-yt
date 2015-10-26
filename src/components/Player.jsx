import React from 'react';

import '../styles/Player';

export default React.createClass({
  render: function() {
    return (
      <div className="playerContainer">
        <h1>Player</h1>
        <div className="videoContainer"></div>
      </div>
    );
  }
});
