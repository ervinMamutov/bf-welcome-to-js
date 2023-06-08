'use strict';

/* generic

  _a -> position:
  _b -> output:
  _c -> isInputInside:
  _d -> input:


*/

alert('you will need to enter strings with "e" in the right place');

let position = 0;

let output = 'entries:';

let isInputInside = true;
while (isInputInside) {
  let input = prompt('_d a string with "e" at index ' + position);

  if (input === null) {
    isInputInside = !confirm('are you sure you want to exit?');
  } else if (output[position] === 'e') {
    output = output + '\n' + position + '. "' + input + '"';
    position = position + 1;
  } else {
    output = output + '\nx. "' + input + '"';
    isInputInside = false;
  }
}

alert('your score: ' + position + '\n\n' + output);
