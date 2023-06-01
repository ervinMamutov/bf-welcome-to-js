'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

let message = null;
const exeption = [
  '',
  ' ',
  '.',
  ',',
  ':',
  '!',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

// checking the conditions
while (!message) {
  message = prompt('enter some text, the letters will be bouncified');
  if (message === null) {
    // when you click cancel
    alert('there is no escape!');
  }
  if (message === '') {
    // when you input empty string
    alert('no empty input, try again.');
  }
}

let newMessage = ''; // new variable for message
let toUpperCase = true; // boolean flag
for (const characters of message) {
  if (!exeption.includes(characters)) {
    if (toUpperCase) {
      newMessage += characters.toUpperCase();
      toUpperCase = false;
    } else {
      newMessage += characters.toLowerCase();
      toUpperCase = true;
    }
  } else {
    newMessage += characters;
  }
}

alert(newMessage);
