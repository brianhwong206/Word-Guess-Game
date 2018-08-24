var wordBank = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep", "monkey", "rooster", "dog", "pig"]; // wordbank array
var validInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // array for valid user key inputs 
remainingValidInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // array tracker for remaining valid inputs.
var computerSelection = wordBank[Math.floor(Math.random() * wordBank.length)];  // Randomly selects a value from the wordbank.
var selectionLength = computerSelection.length; // Determines the length of the computer selection.
var answerArray = []; // array that will hold the word bank item with delimiters
var finalAnswerArray= []; // array that will hold the word bank item without delimiters

for (var i = 0; i < selectionLength; i++){
    answerArray[i] = "-"; // enters array and for every letter within the selected word, swap it out with a "-"
}
finalAnswerArray = answerArray.join("");  // removal of delimiters


var finalAnswerString = finalAnswerArray.toString(); // converts computer selection answer array to string. 
var winCount = 0;
var loseCount = 0;
var lettersRemaining = computerSelection.length; 
var userGuess; // stores the user key input
var guessesRemaining = 10;
var lettersGuessed = []; // array of letters guessed array
var userGuessAlreadyInArray = lettersGuessed.includes(userGuess); // boolean check


// Functions

function win(){
    winCount++;
    hintAnimal();
}

function lose(){
    loseCount++;
    hintAnimal();
}

function reset(){
    computerSelection = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersRemaining = computerSelection.length;
    selectionLength = computerSelection.length;
    answerArray = [];
    finalAnswerArray= [];
        for (var i = 0; i < selectionLength; i++){
            answerArray[i] = "-";
        }
    finalAnswerArray = answerArray.join("");
    guessesRemaining = 10;
    lettersGuessed = [];
    userGuessAlreadyInArray= [];
    userGuess = "";
    remainingValidInputs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    hintAnimal();
}

function hintAnimal(){

switch (computerSelection) {
case "rat":
    document.querySelector("#rat").style.display = "block";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "ox":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "block";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "tiger":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "block";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "rabbit":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "block";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "dragon":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "block";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "snake":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "block";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "horse":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "block";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "monkey":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "block";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "sheep":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "block";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "rooster":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "block";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "none";
    break;

    case "dog":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "block";
    document.querySelector("#pig").style.display = "none";
    break;

    case "pig":
    document.querySelector("#rat").style.display = "none";
    document.querySelector("#ox").style.display = "none";
    document.querySelector("#tiger").style.display = "none";
    document.querySelector("#rabbit").style.display = "none";
    document.querySelector("#dragon").style.display = "none";
    document.querySelector("#snake").style.display = "none";
    document.querySelector("#horse").style.display = "none";
    document.querySelector("#monkey").style.display = "none";
    document.querySelector("#sheep").style.display = "none";
    document.querySelector("#rooster").style.display = "none";
    document.querySelector("#dog").style.display = "none";
    document.querySelector("#pig").style.display = "block";
    break;
    }
}




// This operation is run whenever the user presses a key.

hintAnimal();
document.onkeyup = function(event) { 
    {

        


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

    //else {alert("Please input a valid character from a-z")}
    

    if ((lettersRemaining === 0) && (guessesRemaining >= 0)){ // win scenario if letters remaining = 0 and remaining guess is greater than 0  
        win();
        reset();
    }

    if ((lettersRemaining > 0) && (guessesRemaining === 0)) {
        lose();
        reset();
    }
}

// html

// var html = 

// "<p>Wins: " + winCount + "</p>" +
// "<p>Losses: " + loseCount + "</p>" +
// "<p>Computer Selection: " + computerSelection + "</p>" +
// //"<p>Presented Selection Final Array: " + answerArray + "</p>" +
// "<p>Number of Letters Remaining: " + lettersRemaining + "</p>" +
// "<p>Presented Selection Final Array: " + finalAnswerArray + "</p>" +
// //"<p>Letter Index: " + letterIndex + "</p>" +
// "<p>UserGuess: " + userGuess + "</p>" +
// "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
// "<p>User Guesses So Far: " + lettersGuessed.join(", ") + "</p>" +
// "<p>Number of Letters Index: " + indexRemaining + "</p>" +
// "<p>Letters Remaining: " + remainingValidInputs.join(", ") + "</p>"


// Set the inner HTML contents of the #game div to our html string
//document.querySelector("#game").innerHTML = html;


document.querySelector("#winCount").innerHTML = "Wins: " + winCount;
document.querySelector("#lossCount").innerHTML = "Losses: " + loseCount;
document.querySelector("#answer").innerHTML = "Answer: " + finalAnswerArray;
document.querySelector("#guessesRemaining").innerHTML = "Guesses Remaining: " + guessesRemaining;
document.querySelector("#currentInput").innerHTML = "Your Current Guess: " + userGuess;
document.querySelector("#guessesSoFar").innerHTML = "Letters Guessed: " + lettersGuessed.join(", ");
document.querySelector("#userRemainingChoices").innerHTML = "Letters Remaining: " + remainingValidInputs.join(", ");
console.log(computerSelection);
}