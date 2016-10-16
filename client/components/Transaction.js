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
        <h1>You have loaned <span>[name] [x] BTC</span>, and will receive payment by <span>[date]</span></h1>
        <button onClick={this.handleSubmit}>Return home</button>
      </div>
    );
  }
}
