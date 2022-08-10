const inputs = document.querySelector(".inputs");
const resetBtn = document.querySelector(".reset-btn");
const hint = document.querySelector(".hint span");
const typingInput = document.querySelector(".typing-input");




// checking if we are on serverside on client side javascript
// if (typeof window !== "undefined") {
//   console.log("You are on the browser");
// } else {
//   console.log("You are on the server");
// }

resetBtn.addEventListener("click", () => {
  // getting a random object from the wordlist
  let randObj = wordList[Math.floor(Math.random() * wordList.length)];

  // getting a random word from the object attained above using the key
  // let word = randObj.word;
  // using object destructuring since we are naming it the same as its key
  let { word } = randObj;

  hint.textContent = randObj.hint

  console.log(word);

  inputs.innerHTML = ``
  for (letter of word) {
    inputs.innerHTML += `<input type="text" disabled /> `;
  }
   
})

document.addEventListener("keydown", () => typingInput.focus)

