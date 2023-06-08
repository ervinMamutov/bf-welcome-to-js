'use strict';

/* generic

  _a -> input:
  _b -> text:
  _c -> isCharInside:
  _d -> character:
  _e -> result:

*/


let input = null;
while (input === null) {
  input = prompt('enter some text, the program will check if it is only vowels');
}

let text = 'aeiou';

let isCharInside = true;
for (let character of input) {
  let result = text.includes(character.toLowerCase());
  if (!result) {
    isCharInside = false;
    break;
  }
}

alert(isCharInside);
