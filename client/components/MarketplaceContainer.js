import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Marketplace from './Marketplace.js';
import Tile from './marketplace/Tile.js'

export default MarketplaceContainer = createContainer(() => {
  var TilesArray = Session.get('TilesArray');
  if (Array.isArray(TilesArray)) {
    return {
      TilesArray: TilesArray.map(function(tile) {
        return (<Tile name={tile.name} amount={tile.amount} message={tile.message}/>);
      })
    }
  } else {
    return {
      TilesArray: [(<Tile name={'Loading...'} />)]
    }
  }
}, Marketplace);
