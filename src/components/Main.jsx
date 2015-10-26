import React from 'react';
import Search from './Search'
import Player from './Player'

import '../styles/Main';

export default React.createClass({
  render: function() {
    return (
      <div className="mainContainer">
        <Search />
        <Player />
      </div>
    )
  }
});
