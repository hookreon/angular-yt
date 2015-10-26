import React from 'react';
import YouTube from 'react-youtube';

import '../styles/Player';

export default class Player extends React.Component {

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <YouTube className="videoContainer"
        url={this.props.url}
        opts={opts}
        onPlay={this._onPlay}
      />
    );
  }
}
