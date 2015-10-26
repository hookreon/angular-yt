import React from 'react';
import Search from './Search'
import Player from './Player'

import '../styles/Main';

export default class Main extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Search {...this.props} />
        <Player {...this.props}/>
      </div>
    )
  }
}
