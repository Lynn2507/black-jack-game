let allCards = [];
let firstCard = 0;
let secondCard = 0;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let newCard = 0;

let sumEl = document.getElementById("sum-text");
let cardEl = document.getElementById("cards-text");
let newCardListener = document.querySelector("#new-card-btn");

// Function that is revoked to get a random card
// Revoke when "New Card" button is clicked
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 11) + 1;
    if (randomNum === 1) {
        return 11;
    } else if (randomNum >= 11) {
        return 10;
    } else {
        return randomNum;
    }
}

// Function that is revoked when "Start Game" button is clicked 
function startGame() {
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    allCards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards:" + " ";

    for(let i = 0; i < allCards.length; i++) {
        cardEl.textContent += allCards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got BlackJack!";
        hasBlackJack = true;
        isAlive = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    document.getElementById("question-text").textContent = message;
}


function drawNewCard() {
    if (isAlive === true && hasBlackJack === false) {
        newCard = getRandomCard();
        sum += newCard;
        allCards.push(newCard);
        renderGame();
    }
}

function restGame() {
    sum = 0;
    firstCard = 0;
    secondCard = 0;
    newCard = 0;
    sumEl.textContent = "Sum: ";
    cardEl.textContent = "Cards:" + " ";
}

document.getElementById("start-btn").addEventListener("click", startGame);

newCardListener.addEventListener("click", drawNewCard);

document.querySelector("#reset-btn").addEventListener("click", restGame);