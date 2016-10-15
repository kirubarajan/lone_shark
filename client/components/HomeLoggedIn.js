import React from 'react';
import { Link } from 'react-router';

export default class HomeLoggedIn extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Not so lone shark</h1>
        <p>A micro loaning service facilitated through bitcoin.</p>
        <div>
          <button><Link to="request">Request for a loan</Link></button>
          <button><Link to="offer">Offer a loan</Link> <br/></button>
        </div>
      </div>
    );
  }
}
