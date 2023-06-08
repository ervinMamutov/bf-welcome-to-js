'use strict';

/* specific

 _a -> charPosition
  _b -> charOutput
  _c -> charInput
  _d -> isCharChoice

*/

alert('you will need to enter strings with "e" in the right place');

let charPosition = 0;

let charOutput = 'entries:';

while (true) {
  let charInput = prompt('input a string with "e" at index ' + charPosition);

  if (charInput === null) {
    let isCharChoice = confirm('are you sure you want to cancel?');
    if (isCharChoice) {
      break;
    } else {
      continue;
    }
  }

  if (charInput[charPosition] !== 'e') {
    charOutput = charOutput + '\nx. "' + charInput + '"';
    break;
  }

  charOutput = charOutput + '\n' + charPosition + '. "' + charInput + '"';
  charPosition = charPosition + 1;
}

alert('your score: ' + charPosition + '\n\n' + charOutput);
