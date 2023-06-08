'use strict';

/* specific

  _a -> someText:
  _b -> charValue:
  _c -> isCharText:
  _d -> charText:
  _e -> lowerCharInText:

*/

let someText = null;
while (someText === null) {
  someText = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let charValue = 'aeiou';

let isCharText = false;
for (let charText of someText) {
  let lowerCharInText = charText.toLowerCase();
  if (charValue.includes(lowerCharInText)) {
    isCharText = true;
    break;
  }
}

alert(isCharText);
