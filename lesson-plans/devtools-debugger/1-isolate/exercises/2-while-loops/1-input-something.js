'use strict';

let input = null;
while (input === null) {
  input = prompt('input something:');
}

alert('thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/

while (input !== null) {
  input = prompt('input anything:');
}
alert('thank you!');