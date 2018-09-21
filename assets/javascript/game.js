//Game flow://
//1: Users arrive at webpage//
//2: Users are prompted to guess a letter of the alphabet, however, the only possible correct answers will be randomly selected by the computer.//
//3: Users make a guess and click 'submit'//
//4: As the game starts at 0 the function will add 1 point to either wins (if a guess is correct) or 1 point to losses (if guess is incorrect)//
//5: As the game progresses, the letters guessed will be listed so users can avoid guessing an incorrect answer twice.//
//6: Game will continue until the sum of wins and losses is equal to 10. The number of guesses will not display on it's own. The player will be able to add wins and losses//
//7: Once the game reaches the 10 points/guesses, the game will reset.//


var randomLetters = ['a', 'e', 'i', 'o', 'u', 'l', 'z', 'y', 'm'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesRemaining = 10;
var guessedLetters = [];


var i;
for (i = 0; i < guessesRemaining.length; i++) {wins++}

var j;
for (j = 0; i < guessesRemaining.length; j++) {losses++}

var computerGuess = randomLetters [Math.floor(Math.random() * randomLetters.length)];

function updateGuessesRemaining() {
    document.querySelector('#guessesRemaining').innerHTML = "Number of guesses remaining: " + guessesRemaining;
};


function updateGuessedLetters() {
    document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join('randomLetters');
};

var reset = function() {
    totalGuesses = 10;
    guessesRemaining = 10;
    guessedLetters = [];

    updateGuessesRemaining();
    updateGuessedLetters();
}

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var keyEnter = randomLetters.includes(userGuess);

    if (keyEnter === false) {
        return false;
    } 
    else if (keyEnter === true) {
        guessesRemaining--;
        guessedLetters.push(userGuess);
        updateGuessesRemaining();
        updateGuessedLetters();

        if (guessesRemaining > 0) {
            if (userGuess == guessedLetters) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                reset();
            }

        } 
       if (guessesRemaining === 0) {
            reset();
        }
        return false;
    } else {
        alert("Game Over");
    }

};
   