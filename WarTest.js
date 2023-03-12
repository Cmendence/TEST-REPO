

// class Deck{
//     constructor() {
//         this.fullDeck = [];
//         this.faceValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//         this.suits = ['♠', '♥', '♣', '♦'];
//         this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//     }
//     createDeck() {
//             for (let s = 0; s < this.suits.length; s++){
//                 for (let r = 0; r < this.rank.length; r++){
//                     this.fullDeck.push(new Card(this.faceValue[r], this.suits[s], this.rank[r]));
//                 }
//             }
        
//         }
// }

// class Card {
//     constructor(faceValue, suits, rank) {
//         this.faceValue = faceValue;
//         this. suits = suits;
//         this.rank = rank;
//     }

// }

// let d = new Deck();
// d.createDeck();


const suits = ['♠', '♥', '♣', '♦'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// const rank = []


function freshDeck() {
    return suits.flatMap(suit => {
        return values.map((value, rank) =>{
            return new Card(suit, value, rank)
        });
    });
}


// deck takes in cards. We have used the freshDeck function to return a flatmapped array of the new deck with suits
 class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
}

// shorthand for this.cards.length
get numberOfCards(){
    return this.cards.length;
}

// Fisher Yates shuffle. Start at the back, take the current card [i], get a random integer position that we have 
// not yet accessed in the deck, and swap those cards.
 shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i-- ) {
       const newIndex = Math.floor(Math.random() * (i + 1));
       const oldValue = this.cards[newIndex];
       this.cards[newIndex] = this.cards[i];
       this.cards[i] = oldValue;
    }
 }

}

// card takes in suit and value
class Card {
    constructor(suit, value, rank) {
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}

function freshDeck() {
    return suits.flatMap(suit => {
        return values.map((value, rank) =>{
            return new Card(suit, value, rank)
        });
    });
}


const deck = new Deck()
console.log(deck);

// class Player {
//     constructor(playerName, playerDeck, playerPoints)
// }
class Player {
    constructor(name){
        this.name = name;
        this.points = 0;
        this.playerDeck = [];
    }

}
let playerOne = new Player ('Bobby');
let playerTwo = new Player ('Magnus');
const deckMid = Math.ceil(deck.numberOfCards / 2);

// const cardValueMap = {
//         '2': { rank: '2', value: 2 },
//         '3': { rank: '3', value: 3 },
//         '4': { rank: '4', value: 4 },
//         '5': { rank: '5', value: 5 },
//         '6': { rank: '6', value: 6 },
//         '7': { rank: '7', value: 7 },
//         '8': { rank: '8', value: 8 },
//         '9': { rank: '9', value: 9 },
//         '10': { rank: '10', value: 10 },
//         'J': { rank: 'Jack', value: 11 },
//         'Q': { rank: 'Queen', value: 12 },
//         'K': { rank: 'King', value: 13 },
//         'A': { rank: 'Ace', value: 14 },
//     };

  start();

function start(){
    console.log(`Get ready to play....WAR!
    
    `)
    const deck = new Deck()
    deck.shuffle()
    playerOne.playerDeck.push(deck.cards.slice(0, deckMid));
    playerTwo.playerDeck.push(deck.cards.slice(deckMid, deck.numberOfCards));
}


class Game {
    playWar() {
        for (let i = 0; i < deckMid; i++) {
            let playerOneCard = playerOne.playerDeck[i].value + ' ' + playerOne.playerDeck[i].suit;
            let playerTwoCard = playerTwo.playerDeck[i].value + ' ' + playerTwo.playerDeck[i].suit;
            let playerOneRank = playerOne.playerDeck[i].rank;
            let playerTwoRank = playerTwo.playerDeck[i].rank;

            console.log(`${playerOne.name}'s card:  ${playerOneCard}`);
            console.log(`${playerTwo.name}'s card: ${playerTwoCard}`);
        if (playerOneRank > playerTwoRank) {
            playerOne.points ++; 
            console.log(`Score: ${playerOne.name}:  ${playerOne.points} ✔
       ${playerTwo.name}: ${playerTwo.points}
        `);
        } else if (playerOneRank < playerTwoRank) {
            playerTwo.points ++;
            console.log(`Score: ${playerOne.name}:  ${playerOne.points}
       ${playerTwo.name}: ${playerTwo.points} ✔
        `);
        } else {
            console.log(`   Tie hand!
            `);
        }
        
    //     console.log(`Score: ${playerOne.name}:  ${playerOne.points}
    //    ${playerTwo.name}: ${playerTwo.points}
    //     `);
        }

    }

}

let playWar = new Game();
playWar.playWar()
declareWinner();

let declareWinner=() =>{
if (playerOne.points > playerTwo.points){
    console.log(`${playerOne.name} wins with ${playerOne.points} points!!!`);
}else if (playerOne.points < playerTwo.points){
    console.log(`${playerTwo.name} wins with ${playerTwo.points} points!!!`);
} else {
    console.log('Tie game!');
}
}


