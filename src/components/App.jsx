import React from 'react';
import {RouteHandler} from 'react-router';
import Main from './Main'
import Search from './Search'
import Player from './Player'
import {searchYouTube} from './youTubeSearch';

import '../styles/App';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: 'http://www.youtube.com/watch?v=2g811Eo7K8U'
    };

    this.doSearch = this.doSearch.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }

  doSearch(searchTerm) {
    searchYouTube(searchTerm);
  }

  updateVideo() {
    console.log('video');
  }

  render() {
    return (
      <Main {...this.props} {...this.state} doSearch={this.doSearch}/>
    );
  }
}

App.propTypes = {
  url: React.PropTypes.string,
};
