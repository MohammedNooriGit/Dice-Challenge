var randomNumber1 = Math.floor(Math.random() * 6); // Generating a random number between 0-5
var randomNumber2 = Math.floor(Math.random() * 6);

// The list of dice images from 1-6
var diceList = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

// Set first image to first random number
document.querySelector("img.img1").setAttribute("src", diceList[randomNumber1]);

// Set second image to second random number
document.querySelector("img.img2").setAttribute("src", diceList[randomNumber2]);

// Deciding the Winner

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins 🚩";
} else {
  document.querySelector("h1").textContent = "🚩 Player 2 Wins";
}
