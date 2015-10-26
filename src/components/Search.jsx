import React from 'react';

import '../styles/Search';

export default class Search extends React.Component {
  constructor() {
    super();
    this.youTubeSearch = this.youTubeSearch.bind(this);
  }

  youTubeSearch(event) {
    event.preventDefault();
    const searchProps = {
      searchText: this.refs.search.getDOMNode().value.trim()
    }
    this.props.doSearch(searchProps.searchText);
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.youTubeSearch}>
          <label for="seach">Search</label><input type="text" ref="search" />
        </form>
      </div>
    );
  }
}
