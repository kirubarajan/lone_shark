import React from 'react';

export default class Tile extends React.Component {
  render() {
    const { name, amount, message } = this.props;

    return (
      <div className="marketplace-tile">
        <h3>{name}</h3>
        <p>{amount}</p>
        <p>{message}</p>
      </div>
    );
  }
}
