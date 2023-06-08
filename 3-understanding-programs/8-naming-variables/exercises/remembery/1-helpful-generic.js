'use strict';

/* generic
  _a -> first:
  _b -> second:
  _c -> three:
  _d -> calc:
  _e -> result:
  _f -> input:



*/

alert(
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let first = prompt('enter your first secret phrase:');
let second = prompt('enter your second secret phrase:');
let three = prompt('enter your third secret phrase:');

alert('all saved! get ready to remember');

let calc = Math.round(Math.random() * 2) + 1;

let result = '';
if (calc === 1) {
  result = first;
} else if (calc === 2) {
  result = second;
} else if (calc === 3) {
  result = three;
}

let input = prompt('enter phrase number ' + calc);

if (input === result) {
  alert('correct! phrase ' + calc + ' was "' + result + '"');
} else {
  alert('nope :(');
}
