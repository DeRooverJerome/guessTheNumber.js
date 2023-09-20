let firstNumber = parseInt(prompt("Pick a max Number"));
let numberToGuess = Math.floor(Math.random() * firstNumber);
let guessCount = 1;
let response = parseInt(
  prompt(`Guess the number beetween 1 and ${firstNumber}`)
);
console.log(numberToGuess);

while (Number.isNaN(firstNumber)) {
  firstNumber = parseInt(prompt("Please, pick a number"));
}

while (response !== numberToGuess) {
  if (Number.isNaN(response)) {
    response = parseInt(prompt("Please its a number"));
  } else if (response > numberToGuess) {
    response = parseInt(prompt(`It's too high, pick a smaller number`));
    guessCount++;
  } else if (response < numberToGuess) {
    response = parseInt(prompt(`It's too low, pick a higher number`));
    guessCount++;
  }
}
alert(
  `Congratulation ! its the righ number \n You did it in ${guessCount} attemps.`
);
