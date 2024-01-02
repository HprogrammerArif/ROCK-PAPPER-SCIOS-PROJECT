//GUSSING NUMBER GAME

let gameNum = 24;
let guessNum = prompt("Guess the game number: ");

while(gameNum != guessNum){
  guessNum = prompt("You Enterd Wrong Number. Guess Again: ");
}
console.log("Congratulation. Your Guessing Is Correct.");