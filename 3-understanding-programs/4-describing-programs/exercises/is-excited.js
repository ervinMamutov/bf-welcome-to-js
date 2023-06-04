'use strict';

/*

6. is-excited.js

  A user can enter a some characters will check if it is excited
   - given the users cancel they will be prompted again 
   - given the users input some characters

   test cases
   - given the users cancel
      no output -> they will be prompted again
   - given the users input Ok
      output -> "" is not excited
   - given the users input empty spacev
      output -> "   " is not excited
   - given the users input other than the text 'hello world how are you?'
      output -> '"hello world how are you?" is not excited'
   - given the users input 'hello world, i am fine!'
      output -> '"hello world, i am fine!" is excited'
*/

let input = null;
while (input === null) {
  input = prompt('enter some text, the program will check if it is excited');
}

let isExcited = false;
for (const char of input) {
  if (char === '!') {
    isExcited = true;
    break;
  }
}

let message = '';
if (isExcited) {
  message = '"' + input + '" is excited';
} else {
  message = '"' + input + '" is not excited';
}

alert(message);
