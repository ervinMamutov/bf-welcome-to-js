'use strict';

/* specific

   _a -> checkoutWord:
   _b -> originalWord:
   _c -> isCharInside:
   _d -> character:
   _e -> checkResult:

*/

let checkoutWord = null;
while (checkoutWord === null) {
  checkoutWord = prompt('enter some text, the program will check if it is only vowels');
}

let originalWord = 'aeiou';

let isCharInside = true;
for (let character of checkoutWord) {
  let checkResult = originalWord.includes(character.toLowerCase());
  if (!checkResult) {
    isCharInside = false;
    break;
  }
}

alert(isCharInside);

