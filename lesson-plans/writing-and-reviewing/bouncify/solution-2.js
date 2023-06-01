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
let newMassage = '';
let isUpperCase = true;

while (!message) {
  message = prompt('enter some text, the letters will be bouncified');
  if (message === null) {
    alert('there is no escape!');
  }
  if (message === '') {
    alert('no empty input, try again.');
  }
}

let exeption = '0123456789~!@#$%^&*()_+,.?:;" ';

for (const character of message) {
  if (exeption.indexOf(character) === -1) {
    if (isUpperCase) {
      newMassage += character.toUpperCase();
      isUpperCase = false;
    } else {
      newMassage += character.toLowerCase();
      isUpperCase = true;
    }
  } else {
    newMassage += character;
  }
}

alert(newMassage);

alert(newText);
