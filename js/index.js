const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const wrongLetter = document.querySelector(".wrong-letter span");
const typingInput = document.querySelector(".typing-input");

// checking if we are on serverside on client side javascript
// if (typeof window !== "undefined") {
//   console.log("You are on the browser");
// } else {
//   console.log("You are on the server");
// }

//making word a global variable to access it anywhere
let word,
  corrects = [],
  incorrects = [];

resetBtn.addEventListener("click", () => {
  // getting a random object from the wordlist
  let randObj = wordList[Math.floor(Math.random() * wordList.length)];

  // getting a random word from the object attained above using the key
  // let word = randObj.word;
  // using object destructuring since we are naming it the same as its key
  word = randObj.word;

  hint.textContent = randObj.hint;

  console.log(word);

  inputs.innerHTML = ``;
  for (letter of word) {
    inputs.innerHTML += `<input type="text" disabled /> `;
  }
});

function initGame(e) {
  let key = e.target.value;
  //lets validate user pressed key is alphabet, character or number
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrects.includes(` ${key}`) &&
    !corrects.includes(key)
  ) {
    console.log(key);
    // lets check if the entered key is in the word
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        //showing matched letter in the input value
        if (word[i] === key) {
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      incorrects.push(` ${key}`);
    }
  }

  wrongLetter.textContent = incorrects;
  //reseting the input tagwhen a key is pressed
  typingInput.value = "";
}

typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());
