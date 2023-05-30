'use strict';

let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let newInput = null;
while (newInput === null) {
  newInput = prompt('NEXT LEVEL: enter something with 10 characters:');
}

while (newInput !== 'everythig') {
  newInput = prompt('FINAL LEVEL: enter "everythig"');
}

let newMessage = 'GREATE! /nThank you!';

alert(newMessage);
