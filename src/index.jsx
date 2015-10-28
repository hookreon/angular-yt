import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/App';
import Main from './components/Main'
import Search from './components/Search'
import Player from './components/Player'

// Initialize routes and root component
const routes = (
  <Route component={App}>
    <Route name="main" path="/" component={Main} />
  </Route>
);

// Render app into DOM
ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
