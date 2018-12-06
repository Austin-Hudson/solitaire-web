import React, { Component } from 'react';
import SuitDeck from "./SuitDeck.js"

import '../css/deckpanel.css';

class DeckPanel extends Component {

  render() {

    return (
      <div className="deck-panel">
        <SuitDeck suit="heart"/>
        <SuitDeck suit="diamond"/>
        <SuitDeck suit="club"/>
        <SuitDeck suit="spade"/>
      </div>
    );
  }
}

export default DeckPanel;
