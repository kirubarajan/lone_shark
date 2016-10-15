import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Marketplace from './Marketplace.js';
import Tile from './marketplace/Tile.js'

export default MarketplaceContainer = createContainer(() => {
  var TilesArray = Session.get('TilesArray');
  if (TilesArray && TilesArray.length) {
    return {
      TilesArray: TilesArray.map(function(tile) {
        return (<Tile name={tile.name} amount={title.amount} message={title.message}/>);
      })
    }
  }
}, Marketplace);
