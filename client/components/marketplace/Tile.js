import React from 'react';

export default class Tile extends React.Component {
  render() {
    const { name, amount, message } = this.props;
    return (
      <div className="marketplace-tile">
        <h3>a tile</h3>
        <p>Name: {name}</p>
        <p>Amount: {amount} bitcoin</p>
        <p>Message: {message}</p>
        <button>Accept</button>
      </div>
    );
  }
}
