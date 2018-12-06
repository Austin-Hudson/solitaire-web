import React, { Component } from 'react';

import '../css/newgame.css';

class NewGame extends Component {

  	render() {
	    return (
	      <button onClick={this.props.handleNewGame} className="new-game-button">New Game</button>
	    );
  	}
}

export default NewGame;