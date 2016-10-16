import React from 'react';
import Tile from './marketplace/Tile.js'
export default class Marketplace extends React.Component {
  constructor(props) {
    super(props);
    this.getArrayFromServer = this.getArrayFromServer.bind(this);
  }
  componentWillMount() {
    this.getArrayFromServer();
  }
  getArrayFromServer() {
    Meteor.call('fetchRequests', true, function(error, result) {
      Session.set('TilesArray', result);
    });
  }
  render() {
    return (
      <div class="marketplace">
        {this.props.TilesArray}
      </div>
    );
  }
}
Marketplace.propTypes = {
  TilesArray: React.PropTypes.arrayOf(React.PropTypes.element),
}
