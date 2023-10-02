let min = 2;
let max = 21;

let card1 = Math.floor(Math.random() * (max - min + 1) + min);

let card2 = Math.floor(Math.random() * (max - min + 1) + min);

let cards = [card1, card2];

let tot = card1 + card2;

let hasJack = false;

let isAlive = true;

let message = "";

function startGame() {
  document.getElementById("total").textContent = `The Sum is: ${tot}`;

  document.getElementById(
    "card"
  ).textContent = `The Cards are: ${cards[0]} and ${cards[1]}`;

  if (tot <= 20) {
    message = "Do you want to draw new card?";
  } else if (tot === 21) {
    message = "Kudos, you have the BJ"; //please don't take it wrong lol
    hasJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }

  let round = (document.getElementById("round").textContent = message);
}

function changingFNC() {
  document.getElementById("headingChange").innerHTML = "Rup's Black Jack ";
}

setInterval(changingFNC, 2000);

function changeRound() {
  document.getElementById("startings").innerHTML = "Try now!";
}

setInterval(changeRound, 3000);

function changePlay() {
  document.getElementById("round").innerHTML = "Roll your card";
}

setInterval(changePlay, 4000);

function changeBTN() {
  document.getElementById("gameBTN").innerHTML = "Click here";
}

setInterval(changeBTN, 2000);