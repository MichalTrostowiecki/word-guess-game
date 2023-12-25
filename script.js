const wordContainer = document.querySelector(".word-container");



let wordsLibrary = ["javascript", "html", "apple", "house", "believe", "bootcamp"];
let randomWord = [];
let hiddenWord = [];
let userKey;

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


hideWord();
userInput();
console.log(randomWord);