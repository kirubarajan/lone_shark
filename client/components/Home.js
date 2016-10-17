import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Not so lone shark</h1>
        <p>P2P Bitcoin micro-loaning to experiment with interest accumulation</p>
        <div>
          <button><Link to="login">Login</Link></button>
          <button><Link to="register">Register</Link> <br/></button>
        </div>
      </div>
    );
  }
}
