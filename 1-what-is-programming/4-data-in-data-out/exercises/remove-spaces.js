'use strict';

/* Remove Spaces

  This programme removes spaces between words in the text

  Data In:
  Gets a value on the input.
  It does not do any checking.
  This can be either an empty value or a single value or sentence.

  Data Out:

  The return value depends on the input value.
  If value is empty, an empty value is returned.
  If value is one word, one word is returned.
  If the value is text, it returns text without spaces between words.

  Test Cases:

  Hello my name Ervin => before: Hello my name Ervin
                         after: HellomynameErvin

  world => before: world
           after: world

  => before:
     after:
*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
