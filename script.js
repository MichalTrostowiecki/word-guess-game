const wordContainer = document.querySelector(".word-container");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const lossDisplay = document.getElementById("losses");
const winsDisplay = document.getElementById("wins");
const secondsPelement = document.getElementById("seconds");


let wordsLibrary = ["javascript", "html", "apple", "house", "believe", "bootcamp"];
let randomWord = [];
let hiddenWord = [];
let intervalId;
let userKey;
let wins = 0;
let losses = 0;
let gameTime = 10;


function getData() {
	secondsPelement.textContent = "";

    let localWins = localStorage.getItem("wins");
    let localLosses = localStorage.getItem("losses");

	if (localWins === null) {
		winsDisplay.textContent = 0;
	} else {
		winsDisplay.textContent = localWins;
	}

	if (localLosses === null) {
		lossDisplay.textContent = 0;
	} else {
		lossDisplay.textContent = localLosses;
	}
}

getData();

startBtn.addEventListener("click", startGame);

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

function keyHandler(event) {
    userKey = event.key;
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] === event.key) {
            checkWord();
        }
    };
}



function userInput() {
    document.addEventListener("keydown", keyHandler);
}

function checkWord() {
    
    for (let i = 0; i < randomWord.length; i++) {
        if (userKey === randomWord[i]) {
            hiddenWord[i] = userKey;
            
        }
    }
    wordContainer.innerHTML = hiddenWord.join("");
    checkWinner();
}


function timer() {
    gameTime = 10;

	secondsPelement.textContent = "seconds remaining";

    intervalId = setInterval(function() {
        if (gameTime >= 0) {
            timeDisplay.textContent = gameTime;
            gameTime--;
			if (gameTime <= 0) {
				secondsPelement.textContent = "second remaining"
			}
        } else {
            clearInterval(intervalId);
            gameOver();
            alert("Time is up!")
        }
    },1000)
}

function startGame() {
	getData();
    clearInterval(intervalId);
    wordContainer.textContent = "";
    randomWord = [];
    hiddenWord = [];
    hideWord();
    timer();
    document.addEventListener("keydown", keyHandler);
}

function checkWinner() {
    if (hiddenWord.join("") === randomWord.join("")) {
        timeDisplay.textContent = "0";
        clearInterval(intervalId);
        alert("You've guessed the word!")
        wins++;
        document.removeEventListener("keydown", keyHandler);
		
    }
    winsDisplay.textContent = wins;
	localStorage.setItem("wins", wins);
    
}

function gameOver() {
    alert("Game over!")
    wordContainer.innerHTML = randomWord.join("");
    losses++;
    lossDisplay.textContent = losses;
    localStorage.setItem("losses", losses);
}

