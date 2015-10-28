import React from 'react';
import {RouteHandler} from 'react-router';
import io from 'socket.io-client';
import Main from './Main';
import Search from './Search';
import Player from './Player';

import '../styles/App';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // App constructor serves as single source of truth for app state
    this.state = {
      search: [],
      url: ''
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.connect = this.connect.bind(this);
    this.results = this.results.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }

  // Initialize socket.io connection on mount
  componentDidMount() {
		this.socket = io('http://localhost:8080');
    this.socket.on('connect', this.connect);
    this.socket.on('search results', this.results);
	}

  // Connect to server socket
  connect() {
    console.log("Connected: " + this.socket.id);
  }

  // Receive search results from server
  results(results) {
    this.setState({search: results});
    console.log('results', results);
  }

  // Continually receive search results from server
  componentWillReceiveProps() {
		this.socket = io();
		this.socket.on('search results', function (searched) {
			that.setState({ search: searched });
      console.log(searched);
		});
	}

  // Pass search results to server
	submitSearch(eventName, searchTerm) {
		this.socket.emit(eventName, searchTerm, function (err) {
			if (err)
				return console.error('New search error:', err);
			callback();
      console.log('returned', searchTerm);
		});
	}

  // Set currently selected video to state
  updateVideo(newVideo) {
		this.setState({url: newVideo});
	}

  // Pass props and state to child routes
  render() {
    return (
      <Main {...this.props} {...this.state} submitSearch={this.submitSearch} updateVideo={this.updateVideo}/>
    );
  }
}

App.propTypes = {
  search: React.PropTypes.array,
  url: React.PropTypes.string
};
