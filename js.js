
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let player = {
    name: "talha",
    chips: "500"
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $:" + player.chips

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13) + 1;
    if(randomCard === 1) {
        return 11;
    } else if ( 10 < randomCard) {
        return 10;
    } else return randomCard;
     
}


function startGame() {
    cards = [getRandomCard(), getRandomCard()] 
    sum = cards[0] + cards[1]
    isAlive = true;
    renderGame()
}

function renderGame() { 
    sumEl.innerHTML = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
    messageEl.innerHTML = "do you want to draw a new card?"
    
    } 
    else if (sum === 21) {
    messageEl.innerHTML = "you've got a Blackjack!"
    hasBlackJack = true;
    }  
    else {
    messageEl.innerHTML ="You're out of the game."
     isAlive = false;
    }
}


function newCard() {
    if(isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
    }
}

