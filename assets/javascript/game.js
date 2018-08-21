var wordBank = ["dog", "cat", "mouse", "rabbit"]
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
var remainingValidInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly selects a value from the wordbank.
var computerSelection = wordBank[Math.floor(Math.random() * wordBank.length)]; 

// Determines the length of the computer selection.
var selectionLength = computerSelection.length;

// Array is generated based on the length of the computer selection
var answerArray = [];
var finalAnswerArray= [];
for (var i = 0; i < selectionLength; i++){
    answerArray[i] = "-";
}
finalAnswerArray = answerArray.join(""); 

var lettersRemaining = computerSelection.length;
var userGuess;
var guessesRemaining = 10;
var gameStatus = "";
var lettersGuessed = []; // letters guessed array
var userGuessAlreadyInArray = lettersGuessed.includes(userGuess); // boolean check

// Functions

function win(){
    gameStatus = "You Win!";
}

function lose(){
    gameStatus = "You lose!";
}

function reset(){
    gameStatus = "";
}



// This function is run whenever the user presses a key.
document.onkeyup = function(event) {      

// Determines which key was pressed.
userGuess = event.key;
var letterIndex = validInputs.indexOf(userGuess);


    if (letterIndex > -1){ // Determines if key pressed is a valid input based on if input is within the valid input array.

        // checks to see if letter guess has already been used, if not, add to the user guess array.
        if (userGuessAlreadyInArray = lettersGuessed.includes(userGuess)) {
            alert("You have already guessed this letter.");
        }

        else if ((computerSelection !== finalAnswerArray) && (guessesRemaining >0)){
        lettersGuessed.push(userGuess); // adds letter guessed into lettersGuessed array

        //check to see if userGuess is present within computerSelection
            for (var j = 0; j <selectionLength; j++){
                if(computerSelection[j] === userGuess){
                    answerArray[j] = userGuess;
                    lettersRemaining--;
                }
            }

            if (answerArray.includes(userGuess)) {
            }
            else {guessesRemaining--;
            }

            // remove letter from remaining letters list
            var indexRemaining = remainingValidInputs.indexOf(userGuess);
            remainingValidInputs.splice(indexRemaining,1);
        }           

    // removes delimiter from blanksArray
    finalAnswerArray = answerArray.join(""); 
    }

    else {alert("Please input a valid character from a-z")}
    

    if ((lettersRemaining === 0) && (guessesRemaining > 0)){ // win scenario if letters remaining = 0 and remaining guess is greater than 0
        gameStatus = "You Win!";
    }

    if ((lettersRemaining >0) && (guessesRemaining === 0)) {
        gameStatus = "You Lose!";
    }

// html

var html = 

"<p>Computer Selection: " + computerSelection + "</p>" +
"<p>Presented Selection Final Array: " + answerArray + "</p>" +
"<p>Presented Selection Final Array: " + finalAnswerArray + "</p>" +
"<p>Letter Index: " + letterIndex + "</p>" +
"<p>UserGuess: " + userGuess + "</p>" +
"<p>Guesses Remaining: " + guessesRemaining + "</p>" +
"<p>User Guesses So Far: " + lettersGuessed.join(", ") + "</p>" +
"<p>Number of Letters Index: " + indexRemaining + "</p>" +
"<p>Number of Letters Remaining: " + lettersRemaining + "</p>" +
"<p>Letters Remaining: " + remainingValidInputs.join(", ") + "</p>" +
"<p>Game Status: " + gameStatus + "</p>"


// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

}