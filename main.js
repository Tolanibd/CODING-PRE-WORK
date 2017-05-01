 console.log("Up and running!");

var cards = [ 
{  
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{  
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{  
	rank: "King",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"

},

{  
	rank: "King",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},


];
var cardsInPlay = [0];

var checkForMatch = function () {
	  if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

var flipcard = function () {
	var cardId= this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
this.setAttribute('src', cards[cardId].cardImage);
}



var createBoard = function () {
	  for (var i = 0; i <cards.length; i++) {

	 var cardElement = document.createElement('img');
	 cardElement.setAttribute('src', 'images/images/back.png');
	 cardElement.setAttribute('data-id', 'i');
	 cardElement.addEventListener('click', 'flipcard');
	 document.getElementById('game-board').appendChild(cardElement);

	  }

};

createBoard();