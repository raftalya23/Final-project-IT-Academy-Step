let numToGuess = Math.floor(Math.random() * 20) + 1;  
console.log(numToGuess)

let timesForGuess = 1 

const guessTheNumber = () => {
  let userNum = prompt('Enter a number');

  while (parseInt(userNum) !== numToGuess) {
    timesForGuess++
    if (userNum < numToGuess) {
      alert("Hint: enter a higher number");
    } else if (userNum > numToGuess) {
      alert("Hint: enter a lower number");
    }

    userNum = prompt('Enter a number');
  }

  alert(`Congratulations! You guessed the number. Try: ${timesForGuess}`);

}

guessTheNumber(); 
