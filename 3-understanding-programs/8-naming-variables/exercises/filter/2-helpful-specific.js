'use strict';

/* specific

  _a -> searchWord
  _b -> resultWord
  _c -> character
  _d -> checkWord

*/

let searchWord = null;
while (searchWord === null) {
  searchWord = prompt('enter some text, the program will remove all vowels');
}

let resultWord = '';
for (let character of searchWord) {
  let checkWord = 'aeiou'.includes(character.toLowerCase());
  if (!checkWord) {
    resultWord = resultWord + character;
  }
}

alert(resultWord);
