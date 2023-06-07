'use strict';

/*
15. repeat-or-remove.js

  The program deletes or repeats characters depending on theby user's choice.
    
  test cases
   - given the users cancel when prompted to enter: 'enter a phrase'
      output -> they will be prompted again 
   - given the users input Ok when prompted to enter: 'enter something with duplicated letters, they will be removed'
      output -> '' 
   
   - given the users input when prompted to:
      output -> 'enter a phrase' -> 'q1w2e3r4t5y6' -> ''ok' to remove everything that is not a letter
'cancel' to repeat each character' -> 
    'OK' -> 'qwerty';
    'cancel' -> 'qq11ww22ee33rr44tt55yy66';
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
