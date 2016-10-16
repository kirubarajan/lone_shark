import React from 'react';
import { hashHistory } from 'react-router';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit() {
    event.preventDefault();
    hashHistory.push('/transaction')
  }
  render() {
    const { name, amount, message } = this.props;
    return (
      <div className="marketplace-tile">
        <h3>{amount} BTC</h3>
        <h4>{name}</h4>
        <p>{message}</p>
        <button onClick={this.handleSubmit}>Accept</button>
      </div>
    );
  }
}
