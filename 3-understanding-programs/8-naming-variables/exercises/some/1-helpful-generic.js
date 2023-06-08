'use strict';

/* generic

  _a -> input:
  _b -> value:
  _c -> isInput:
  _d -> char:
  _e -> lowerChar:


*/

let input = null;
while (input === null) {
  input = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let value = 'aeiou';

let isInput = false;
for (let char of input) {
  let lowerChar = char.toLowerCase();
  if (value.includes(lowerChar)) {
    isInput = true;
    break;
  }
}

alert(isInput);
