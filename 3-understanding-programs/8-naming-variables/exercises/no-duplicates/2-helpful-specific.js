'use strict';

/* specific

  _a -> message:
  _b -> resultMessage:
  _c -> character:
  _d -> isCharInMessage:

*/

let message = null;
while (message === null) {
  message = prompt('enter something with no duplicate characters');
}

let resultMessage = '';
for (let character of message) {
  let isCharInMessage = resultMessage.includes(character);
  if (isCharInMessage) {
    break;
  }
  resultMessage = resultMessage + character;
}

if (resultMessage.length === message.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
