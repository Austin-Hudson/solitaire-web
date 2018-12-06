import React, { Component } from 'react';
import Score from "./Score.js";
import DeckPanel from "./DeckPanel.js";
import NewGame from "./NewGame.js";

import Deck from '../js/deck.js';
import '../css/solitaire.css';


class Solitaire extends Component {

  constructor(props){
  	  super(props);
      this.state = {
        score: 0,
        moves: 0,
        timer: "00:00:00",
        solitaireDeck: []
      }
  }

  handleNewGame(){
    this.setState(state =>{
      return { score: 0, 
               moves: 0,
               solitaireDeck: Deck.createDeck(this.state.solitaireDeck)
             }
    });
    this.setState(state =>{
      return { 
               solitaireDeck: Deck.shuffle(this.state.solitaireDeck)
             }
    });

    console.log(this.state.solitaireDeck)

  }
 
  render() {
  	const score = this.state.score;
  	const moves = this.state.moves;

    return (
      <div className="solitaire-game-board">
      	<Score score={score} moves={moves}/>
        <DeckPanel />
        <div className="bottom-bar-container">
          <NewGame handleNewGame={this.handleNewGame.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Solitaire;
