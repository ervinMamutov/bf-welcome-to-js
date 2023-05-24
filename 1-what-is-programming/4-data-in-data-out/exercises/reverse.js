'use strict';

/* Reverse

  This programme returns the inverted source text

  Data In:

  Gets a value on the input.
  It does not do any checking.
  This can be either an empty value or a single value or sentence.

  Data Out:

  The return value depends on the input value.
  If value is empty, an empty value is returned.
  If value is one word, one word is returned.
  If the value is text, it returns returns the inverted source text.

  Test Cases:

  All checked completed. => All checked completed. -> .detelpmoc dekcehc llA

  world => world -> dlrow

  => ->

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
