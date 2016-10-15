import React from 'react';
import Tile from './marketplace/Tile.js'

const Tiles = [];
export default class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    this.callMeteor = this.callMeteor.bind(this);
  }

  componentWillMount() {
    console.log('component will mount');
    this.callMeteor();
  }

  callMeteor() {
    Meteor.call('fetchRequests', true, function(error, result) {
      result.map(function(request) {
        // Tiles.push(
        //   <Tile name={request.name}
        //   amount={request.amount}
        //   message={request.message}
        // )
        console.log(request.name);
      });
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
