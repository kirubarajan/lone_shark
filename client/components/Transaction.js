import React from 'react';
import { hashHistory } from 'react-router';

export default class Transaction extends React.Component {
  handleSubmit() {
    event.preventDefault();
    hashHistory.push('/loggedin');
  }
  render() {
    return (
      <div className="transaction">
        <h1>You have loaned Bob 0.12 BTC at 0.04% hourly</h1>
        <button onClick={this.handleSubmit}>Return home</button>
      </div>
    );
  }
}
