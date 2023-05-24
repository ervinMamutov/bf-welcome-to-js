'use strict';

/* Mirror

  This program returns a reflection of the word

  Data In:

  Resives a word as input

  Data Out:

  Return two words:
  first: source word
  second: revert source word

  Test Cases:

  hello => elleh | hello

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
