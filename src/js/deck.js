export default class{

	// constructor(){
	// 	this.deck = []
	// }

	static createDeck(deck){
	  var values = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10, 11, 12, 13];
	  var suits = ["Clubs", "Hearts", "Diamonds", "Spades"];

	  for(var i = 0; i < values.length; i++){
	    for(var j = 0; j < suits.length; j++){
	      var card = {value: values[i], suit: suits[j]};
	      deck.push(card);
	    }
	  }
	}

	/*
	This function shuffles the deck
	*/
	static shuffle(deck){
	  var randomIndex;
	  var temp;
	  for(var i = 0; i < deck.length; i++){
	    //pick a random index from 0 to deck.length - 1
	    randomIndex = Math.floor(Math.random() * deck.length);

	    temp = deck[i];
	    deck[i] = deck[randomIndex];
	    deck[randomIndex] = temp;

	  }
	 }

}



// /*
// Global Variables for a Deck
// values - the values that a card can have
// suits - the suits that a card can have
// */


// /*
// The card object. It takes two parameters. One for the value and another for the suit
// */


// /*
// The Deck object. It creates an empty deck array
// */
// var Deck = function(){
//   this.deck = [];
// };

// Deck.prototype = Object.create(Card.prototype);
// Deck.prototype.constructor = Deck;

// /*
// This function creates the deck
// */


// Deck.prototype.getSize = function(){
//   return this.length;
// }



// class Deck{
// 	constructor() {
// 		this.deck = [];
// 	}
// }


