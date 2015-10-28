import React from 'react';
import '../styles/Search';

export default class Search extends React.Component {
  constructor() {
    super();
    this.youTubeSearch = this.youTubeSearch.bind(this);
    this.selectResult = this.selectResult.bind(this);
  }

  // Form submit function fires callback on App component
  youTubeSearch(event) {
    event.preventDefault();
    const searchProps = {
      searchText: this.refs.search.value
    }
    this.props.submitSearch('search videos', searchProps.searchText);
    console.log(searchProps.searchText);
  }

  // Click event function fires callback on App component
  selectResult(event) {
    event.preventDefault();
    console.log('event', event.target.dataset.tag);
    const currentVideo = event.target.dataset.tag;
    this.props.updateVideo(currentVideo);
  }

  render() {
    // Map search results from state into list items
    const itemNodes = this.props.search.map(function(item, index) {
      return <li key={index} data-tag={item.link} onClick={this.selectResult}>{item.title}</li>;
    }.bind(this));

    return (
      <div className="formContainer col-sm-12 col-md-4">
        <form className="searchForm" onSubmit={this.youTubeSearch}>
          <label for="search" className="searchLabel">Search YouTube:</label><input type="text" ref="search" id="search" className="searchInput"/>
          <button type="submit" className="searchButton">Go!</button>
        </form>
        <div className="resultsContainer">
          <ul className="searchList">
            {this.props.search ?
            itemNodes :
            null}
          </ul>
        </div>
      </div>
    );
  }
}
