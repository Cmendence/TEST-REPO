console.log("this is my WarCardGame");

const suits = ["♣", "♦" , "♥", "♠"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var playerOne = [];
var playerTwo = [];



//  class Deck {
//     constructor(cards = newDeck()) {
//         this.cards = cards
//     }

//     get numberOfCards() {
//         return this.cards.length;
//     }

//     pop() {
//         return this.cards.shift()
//     }

//     push(card) {
//         this.cards.push(card)

//     }
//  shuffleIt = () => {
//              this.deck.sort(() => 0.5 - Math.random());
//         }
      
//        }
 
//  //shuffle cards to be random using this for loop
// // shuffleIt();
// //       function shuffleIt() {
// //             for (let i = this.numberOfCards.length - 1; i > 0; i--) {
// //                 const newIndex = Math.floor(Math.random () * (i + 1));
// //                  const oldValue = this.cards[newIndex]
// //                   this.cards[newIndex] = this.cards[i];
// //                         this.cards[i] = oldValue
// //         }
      
// //     }
       



// function newDeck() {
//     function newDeck() {
//         return suits.flatMap(suit => {
//                 return values.map(value => {
//                 return new Card(suit, value)
//     })
//         })
            
//     }

//     }

//     let myDeck = new Deck()
//     console.log(myDeck)
   
class Deck {
    constructor(suits, ranks) {
        this.suit = suits;
        this.rank = ranks;
        this.deck = [];
        }
        createDeck() {
            for (let i = 0; i < suits.length; i++) {
                for (let x = 0; x < ranks.length; x++) {
                          this.deck.push({
                            value: x +1,
                            suit: suits[i],
                            rank: ranks[x],

                        });

                    
                }
            }
        }
    shuffleIt () {
    this.deck.sort(() => 0.5 - Math.random());

}
}   
//     function newDeck(){
//         return suits.flatMap(suit => {
//             return values.map(value => {
// return new Card(suit, value)
//             })
//         })
//     }
    

    
const freshDeck = new Deck();
freshDeck.createDeck();
freshDeck.shuffleIt();
    console.log('Deck is shuffled and ready to play')
    console.log(freshDeck.deck);



class Player {
    constructor(name) {
this.playerName = name
this.points = 0;
}
}
let playerA = new Player ('Tom')
console.log(playerA)

let playerB = new Player ( 'Sam')
console.log(playerB)
// var x = deal(playerOne, playerTwo);
// expect(playerOne.length).to.equal(26);
// expect(playerTwo.length).to.equal(26);
// console.log("Both players should contain 26 elements");
//     }


//     const split = (deck.numberOfCards / 2)
//     playerOne = Deck(deck.cards.slice(0, split))
//     playerTwo = Deck(deck.cards.slice(split, deck.numberOfCards))
//     console.log(playerOne)
//     console.log(playerTwo)
//  }

  //deck = Deck();
let playerHandA = [];
let playerHandB = [];

  dealCards = (arr) => {
    let half = Math.ceil(arr.length / 2);
    playerHandA = arr.slice(0, half);
    playerHandB = arr.slice(half);

}
dealCards (freshDeck.deck);
console.log('player Tom: ')
console.log(playerHandA)
console.log(playerB.playerName)
console.log(playerHandB)
//let myNewDeck = new Deck ();
//console.log(myNewDeck);

class Game {
   startGame () {
for (let i = 0; i < 26; i++) {
    console.log(playerA.playerName + " 's card: " + playerHandA[i].rank + ' of ' + playerHandA[i].suit)
    console.log(playerB.playerName + " 's card: " + playerHandB[i].rank + ' of ' + playerHandB[i].suit)
if (playerHandA[i].value > playerHandB[i].value) {
    playerA.points += 1;
    console.log(playerA)
    console.log(playerB)
} else if (playerHandA[i].value < playerHandB[i].value){
    playerB.points += 1;
    console.log(playerA)
    console.log(playerB)
}else{
    console.log('tie')
}
console.log(`${playerA.playerName}'s final score: ${playerA.points}`)
console.log(`${playerB.playerName}'s final score: ${playerB.points}`)


}
}
}

    let playGame = new Game();
    playGame.startGame();
    
    let theWinner = () => {
        if (playerA.points > playerB.points) {
            console.log(`${playerA.playerName} Wins!`)
     }else if (playerB.points > playerA.points) {
        console.log(`${playerB.playerName} Wins!`)
        }else {
            console.log('Tie Game')
        }
    }

    theWinner();
 








  




    