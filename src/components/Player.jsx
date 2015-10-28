import React from 'react';
import YouTube from 'react-youtube';

import '../styles/Player';

export default class Player extends React.Component {
  constructor() {
    super();
  }

  render() {
    // Set options for video player
    const opts = {
      playerVars: {
        autoplay: 1
      }
    };
    return (
      <div className="videoContainer col-sm-12 col-md-8">
        <YouTube className="video"
          url={this.props.url}
          opts={opts}
          onPlay={this._onPlay}
        />
      </div>
    );
  }
}
