import React from 'react';

import '../styles/Search';

export default React.createClass({
  render: function() {
    return (
      <div className="searchContainer">
        <h1>Search</h1>
        <input type="text" ref="search" />
      </div>
    );
  }
});
