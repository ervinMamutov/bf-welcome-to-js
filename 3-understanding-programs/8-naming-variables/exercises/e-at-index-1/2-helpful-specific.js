'use strict';

/* specific

  _a -> charPosition:
  _b -> outputChar:
  _c -> isCharInside:
  _d -> charValue:

*/

alert('you will need to enter strings with "e" in the right place');

let charPosition = 0;

let outputChar = 'entries:';

let isCharInside = true;
while (isCharInside) {
  let charValue = prompt('_d a string with "e" at index ' + charPosition);

  if (outputChar === null) {
    isCharInside = !confirm('are you sure you want to exit?');
  } else if (outputChar[charPosition] === 'e') {
    outputChar = outputChar + '\n' + charPosition + '. "' + charValue + '"';
    charPosition = charPosition + 1;
  } else {
    outputChar = outputChar + '\nx. "' + charValue + '"';
    isCharInside = false;
  }
}

alert('your score: ' + charPosition + '\n\n' + outputChar);