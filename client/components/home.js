import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to not so lone shark.</h1>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
    );
  }
}
