import React from 'react';
import Search from './Search'
import Player from './Player'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  // Pass props to child components
  render() {
    return (
      <div>
        <Search {...this.props} />
        <Player {...this.props}/>
      </div>
    )
  }
}
