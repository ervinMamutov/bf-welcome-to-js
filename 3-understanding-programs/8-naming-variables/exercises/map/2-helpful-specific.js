'use strict';

/* specific

  _a -> message:
  _b -> programDescription:
  _c -> messageChar:

*/

let message = null;
while (message === null) {
  message = prompt('enter some text, can you guess what the program does?');
}

let programDescription = '';
for (let messageChar of message) {
  if ('aeiou'.includes(messageChar)) {
    programDescription = programDescription + messageChar.toUpperCase();
  } else if ('AEIOU'.includes(messageChar)) {
    programDescription = programDescription + messageChar.toLowerCase();
  } else {
    programDescription = programDescription + messageChar;
  }
}

alert(programDescription);
