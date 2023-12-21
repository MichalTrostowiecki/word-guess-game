const wordContainer = document.querySelector(".word-container");



let wordsLibrary = ["javascript", "html", "apple", "house", "believe", "bootcamp"];
let randomWord = "";

//Function to pick random word from wordsLibrary
function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * wordsLibrary.length)
    randomWord = wordsLibrary[randomIndex];
    return randomWord;
}

function renderWord(randomWord) {
   
   
}


function hideWord() {
    randomWord = chooseRandomWord();
    let hiddenWord = "";
    for (let i = 0; i < randomWord.length; i++) {
       hiddenWord += "_";
    }
   
    wordContainer.innerHTML = hiddenWord;

}


hideWord();