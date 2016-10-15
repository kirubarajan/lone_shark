import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';

import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import HomeLoggedIn from './components/HomeLoggedIn';
import Request from './components/Request';
import MarketplaceContainer from './components/MarketplaceContainer';

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='home' component={Home}></Route>
        <Route path='login' component={Login}></Route>
        <Route path='register' component={Register}></Route>
        <Route path='loggedin' component={HomeLoggedIn}></Route>
        <Route path='request' component={Request}></Route>
        <Route path='marketplace' component={MarketplaceContainer}></Route>
      </Route>
    </Router>,
    document.querySelector('.app'));
})
