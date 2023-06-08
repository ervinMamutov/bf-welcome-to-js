'use strict';

/* generic

  _a -> input:
  _b -> output:
  _c -> char:
  _d -> isChar:


*/

let input = null;
while (input === null) {
  input = prompt('enter something with no duplicate characters');
}

let output = '';
for (let char of input) {
  let isChar = output.includes(char);
  if (isChar) {
    break;
  }
  output = output + char;
}

if (output.length === input.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
