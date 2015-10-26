import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
// import {Provider} from 'react-redux';
import App from './components/App';
import Main from './components/Main'
import Search from './components/Search'
import Player from './components/Player'

const routes = (
  <Route component={App}>
    <Route name="main" path="/" component={Main} />
  </Route>
);

ReactDOM.render(
  // <Provider store={store}>
    <Router>{routes}</Router>,
  // </Provider>,
  document.getElementById('app')
);
