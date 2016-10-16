import React from 'react';

export default class Tile extends React.Component {
  render() {
    const { name, amount, message } = this.props;
    return (
      <div className="marketplace-tile">
        <h3>{amount} BTC</h3>
        <h4>{name}</h4>
        <p>{message}</p>
        <button>Accept</button>
      </div>
    );
  }
}
