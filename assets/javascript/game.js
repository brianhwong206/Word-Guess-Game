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
    document.querySelector("#animal-info").innerHTML = "";

    hintAnimal();
}

function hintAnimal(){

switch (computerSelection) {
case "rat":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#rat").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They are instinctive, acute and alert in nature which makes them to be brilliant businessmen. They can always react properly before the worst circumstances take place. They are also sophisticated and popular in social interaction. They are sanguine and very adaptable, being popular with others.";
    break;

    case "ox":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#ox").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "People born in the Year of Ox bear persistent, simple, honest, and straightforward characteristics. They are talent leaders with strong faith, and strong devotion to work. They are contemplative before taking actions, not easily affected by the surroundings but just follow their concept and ability. Being conservative with a lack of wit in speaking, they usually look silent and sometimes stubborn in their old ways.";
    break;

    case "tiger":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#tiger").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They have strong sense of errantry, being frank and easy to win others' trust. In their middle age, their fate may be uneven, but after hardships, they will enjoy a bright prospect. While they are also likely to be dogmatic, and like showing off when accomplishing something.";
    break;

    case "rabbit":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#rabbit").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They usually impress others with an image of tenderness, grace and sensitive. They are romantic in relationship, having a high demand in life quality. They avoid arguing with others, and have a capability of converting an enemy into a friend. They are homebody and hospitable, and like house fitting-up. They can work with speed and efficiency, do not insist and get angry easily. But they also like hesitating, which makes them lose many chances.";
    break;

    case "dragon":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#dragon").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They usually a group of people who are lively, intellectual and excitable. They can clearly tell right from wrong. They are upright and frank. However, they are also a bit arrogant and impatient. Female Dragons tend to be overly confident. They hate hypocrisy, gossip and slander. They are not afraid of difficulties but hate to be used or controlled by others.";
    break;

    case "snake":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#snake").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They are a cunning and sly animal, which likes hanging out in darkness. In fact, this animal is also a symbol of wisdom and wit. Therefore, people with Chinese zodiac sign 'Snake', sensitive and humorous, and most of them are gifted in literature and art, such as Goethe and Picasso. Suspicion is their weakness, which makes them hesitant and a bit paranoid.";
    break;

    case "horse":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#horse").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They always impress upon people with dynamic, zealous and generous image. Although endowed with many shinning points, they have to face the weaknesses in their characteristics.";
    break;

    case "monkey":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#monkey").style.display = "block";
    document.querySelector("#animal-info").innerHTML = " They are tender, polite, filial, clever, and kind-hearted. They have special sensitivity to art and beauty and a special fondness for quiet living. They are wise, gentle and compassionate and can cope with business cautiously and circumspectly. In their daily life, they try to be economical. They are willing to take good care of others, but they should avoid pessimism and hesitation.";
    break;

    case "sheep":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#sheep").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They are though of as being smart, clever and intelligent, especially in their career and wealth. They are lively, flexible, quick-witted and versatile. In addition, their gentleness and honesty bring them an everlasting love life. Although they were born with enviable skills, they still have several shortcomings, such as an impetuous temper and a tendency to look down upon others.";
    break;

    case "rooster":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#rooster").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They thougt of as being honest, bright, communicative and ambitious. Most of them are born pretty or handsome, and prefer to dress up. In daily life, they seldom rely on others. However, they might be enthusiastic about something quickly, but soon be impassive. Thus, they need to have enough faiths and patience to insist on one thing.";
    break;

    case "dog":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#dog").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They are usually independent, sincere, loyal and decisive according to Chinese zodiac analysis. They are not afraid of difficulties in daily life. These shining characteristics make them have harmonious relationship with people around."
    break;

    case "pig":
    document.querySelector(".animal-hide").style.display = "none";
    document.querySelector("#pig").style.display = "block";
    document.querySelector("#animal-info").innerHTML = "They are considerate, responsible, independent and optimistic. They always show generousness and mercy to endure other people's mistakes, which help them gain harmonious interpersonal relationships. However, sometimes they will behave lazy and lack actions. In addition, pure hearts would let them be cheated easily in daily life."
    break;
    }
}


// Start of Game
hintAnimal();
document.onkeyup = function(event) {  // This operation is run whenever the user presses a key.
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