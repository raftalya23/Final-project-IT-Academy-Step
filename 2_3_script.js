const fruits = ["მსხალი", "ბანანი", "ვაშლი", "ფეიხოა"]; 



const randomWord = fruits[Math.floor(Math.random() * 4)];

console.log(randomWord);

let lettersLeftToGuess = randomWord.length;
let guessTries = 5;

const hangmanGame = () => {
    let lettersHidden = "*".repeat(lettersLeftToGuess);

    while (guessTries > 0 && lettersLeftToGuess > 0) {  
        const guess = prompt("Enter a letter:");

        if (guess.length !== 1 || !/[ა-ჰ]/.test(guess)) {  
            console.log("Please enter a valid single Georgian letter.");
            continue;
        }

        let found = false;

        for (let i = 0; i < randomWord.length; i++) {
            if (guess === randomWord[i] && lettersHidden[i] === "*") {  
                lettersHidden = lettersHidden.substring(0, i) + guess + lettersHidden.substring(i + 1);
                found = true;
                lettersLeftToGuess--;
            }
        }

        if (!found) {
            alert("Incorrect guess. Try again.");
            guessTries--;
        } else {
            alert("Correct guess! Current word: " + lettersHidden);
        }
    }

    if (lettersLeftToGuess === 0) {
        alert("Congratulations! You guessed the word: " + randomWord);
    } else {
        alert("You ran out of tries. The correct word was: " + randomWord);
    }
};

hangmanGame();

