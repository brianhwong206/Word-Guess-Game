var wordBank = ["dog", "cat", "mouse", "rabbit"]
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

// Randomly selects a value from the wordbank.
var computerSelection = wordBank[Math.floor(Math.random() * wordBank.length)]; 

// Determines the length of the computer selection.
var selectionLength = computerSelection.length;

// Array is generated based on the length of the computer selection
var answerArray = [];
var finalAnswerArray = [];
for (var i = 0; i < selectionLength; i++){
    answerArray[i] = "-";
}

var lettersRemaining = computerSelection.length;
var userGuess;
var gameStatus = "";
var lettersGuessed = []; // letters guessed array
var userGuessAlreadyInArray = lettersGuessed.includes(userGuess); // boolean check


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {      

// Determines which key was pressed.
userGuess = event.key;
var letterIndex = validInputs.indexOf(userGuess);



    if (letterIndex > -1){ // Determines if key pressed is a valid input based on if input is within the valid input array.

        // checks to see if letter guess has already been used, if not, add to the user guess array.
        if (userGuessAlreadyInArray = lettersGuessed.includes(userGuess)) {
        }
        else {
        lettersGuessed.push(userGuess); // adds letter guessed into lettersGuessed array
        //check to see if userGuess is present within computerSelection
            for (var j = 0; j <selectionLength; j++){
                if(computerSelection[j] === userGuess){
                    answerArray[j] = userGuess;
                    lettersRemaining--;
                }
        }
        }

    // removes delimiter from blanksArray
    finalAnswerArray = answerArray.join(""); 
    }

    else {alert("Please input a valid character from a-z")}

// html

var html = 

"<p>Computer Selection: " + computerSelection + "</p>" +
"<p>Presented Selection Final Array: " + answerArray + "</p>" +
"<p>Presented Selection Final Array: " + finalAnswerArray + "</p>" +
"<p>Letter Index: " + letterIndex + "</p>" +
"<p>UserGuess: " + userGuess + "</p>" +
"<p>User Guesses So Far: " + lettersGuessed.join(", ") + "</p>" +
"<p>Letters Remaining: " + lettersRemaining + "</p>" +
"<p>Game Status: " + gameStatus + "</p>"




// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;

}