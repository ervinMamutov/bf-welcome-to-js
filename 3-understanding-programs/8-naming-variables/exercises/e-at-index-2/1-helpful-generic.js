'use strict';

/* generic

  _a -> position
  _b -> output
  _c -> input
  _d -> isChoice


*/

alert('you will need to enter strings with "e" in the right place');

let position = 0;

let output = 'entries:';

while (true) {
  let input = prompt('input a string with "e" at index ' + position);

  if (input === null) {
    let isChoice = confirm('are you sure you want to cancel?');
    if (isChoice) {
      break;
    } else {
      continue;
    }
  }

  if (input[position] !== 'e') {
    output = output + '\nx. "' + input + '"';
    break;
  }

  output = output + '\n' + position + '. "' + input + '"';
  position = position + 1;
}

alert('your score: ' + position + '\n\n' + output);