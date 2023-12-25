const wordContainer = document.querySelector(".word-container");
const timeDisplay = document.getElementById("time-display");


let wordsLibrary = ["javascript", "html", "apple", "house", "believe", "bootcamp"];
let randomWord = [];
let hiddenWord = [];
let userKey;
let wins = 0;
let losses = 0;

//Function to pick random word from wordsLibrary
function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * wordsLibrary.length)
    randomWord = wordsLibrary[randomIndex];
    randomWord = randomWord.split("")
    return randomWord;
}


//Function to replace word with "_" depending on how long the word is.
function hideWord() {
    randomWord = chooseRandomWord();
   
    for (let i = 0; i < randomWord.length; i++) {
       hiddenWord.push(" _ ");
    }
    wordContainer.innerHTML = hiddenWord.join("");
}

//Function to get user input and to check with random word.
//Then it compares it with random word.
//This is not finished
function userInput() {
    document.addEventListener("keydown", function(event) {
        userKey = event.key;

        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === event.key) {
                checkWord();
            }
        }
    })
}

function checkWord() {
    console.log(userKey);
    
    for (let i = 0; i < randomWord.length; i++) {
        if (userKey === randomWord[i]) {
            hiddenWord[i] = userKey;
            console.log(hiddenWord);
            wordContainer.innerHTML = hiddenWord.join("");
        }
    }
}


function timer() {
    let gameTime = 60;

    let intervalId = setInterval(function() {
        if (gameTime >= 0) {
            timeDisplay.textContent = gameTime;
            gameTime--;
        } else {
            clearInterval(intervalId);
        }
    },1000)
}





hideWord();
userInput();
console.log(randomWord);
timer();