import React, { Component } from 'react';

import '../css/score.css';

class Score extends Component {
  
  render() {
  	const score = this.props.score;
  	const moves = this.props.moves;

    return (
      <div className="score-board">
     	  <div className="score-label">Score: <span className="score-value">{score}</span></div>
     	  <div className="move-label">Moves: <span className="move-value">{moves}</span></div>
      </div>
    );
  }
}

export default Score;
