'use strict';

/* specific

  _a -> firstSecretPhrase:
  _b -> secondSecretPhrase:
  _c -> threeSecretPhrase:
  _d -> calculatedPrase:
  _e -> resultAfterCalculated:
  _f -> inputPhrase:

*/


alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let firstSecretPhrase = prompt('enter your first secret phrase:');
let secondSecretPhrase = prompt('enter your second secret phrase:');
let threeSecretPhrase = prompt('enter your third secret phrase:');

alert('all saved! get ready to remember');

let calculatedPrase = Math.round(Math.random() * 2) + 1;

let resultAfterCalculated = '';
if (calculatedPrase === 1) {
  resultAfterCalculated = firstSecretPhrase;
} else if (calculatedPrase === 2) {
  resultAfterCalculated = secondSecretPhrase;
} else if (calculatedPrase === 3) {
  resultAfterCalculated = threeSecretPhrase;
}

let inputPhrase = prompt('enter phrase number ' + calculatedPrase);

if (inputPhrase === resultAfterCalculated) {
  alert('correct! phrase ' + calculatedPrase + ' was "' + resultAfterCalculated + '"');
} else {
  alert('nope :(');
}
