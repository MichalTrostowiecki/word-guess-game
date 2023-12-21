const wordContainer = document.querySelector(".word-container");



let wordsLibrary = ["javascript", "html", "apple", "house", "believe", "bootcamp"];

//Function to pick random word from wordsLibrary
function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * wordsLibrary.length)
    let randomWord = wordsLibrary[randomIndex];
    console.log(randomWord);
}

function renderWord() {
    console.log()
}

chooseRandomWord();