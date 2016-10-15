import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home';
import Register from './components/register';
import Login from './components/login';

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Home}></Route>
      <Route path='login' component={Login}></Route>
      <Route path='register' component={Register}></Route>
    </Router>,
    document.querySelector('.app'));
})
