import React from 'react';
import Tile from './marketplace/Tile.js'

export default class Marketplace extends React.Component {
  const Tiles = [];
  getRequests() {
    Meteor.call('fetchRequests', arg1, arg2, function(error, result) {
      for (let i = 0; i < result.length; i++) {
        Tiles.push(<Tile
          receiver={result[i].receiver}
          amount={result[i].amount}
          message={result[i].message}
          >)
      }
    });
  }

  render() {
    return (
      <div>
        {Tiles}
      </div>
    );
  }
}
