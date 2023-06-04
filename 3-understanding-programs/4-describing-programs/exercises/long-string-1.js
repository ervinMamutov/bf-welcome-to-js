'use strict';

/*

7. long-string-1.js

  A user can enter a some characters will check if it is excited
   - given the users cancel they will be prompted again 
   - given the users input some characters

   test cases
   - given the users cancel
      output -> 'there is no escape'-> they will be prompted again 
   - given the users input Ok
      output -> 'too short' -> they will be prompted again 
   - given the users input empty spacev
      output -> 'too short' -> they will be prompted again 
   - given the users input other than the text 'qwerty'
      output -> '"qwerty" is 6 characters long'
   - given the users input 'qwert'
      output -> 'qwert' -> they will be prompted again 
*/

let userInput = '';

let isTooShort = true;
while (isTooShort) {
  userInput = prompt('enter anything longer than 5 characters');

  if (userInput === null) {
    alert('there is no escape');
    continue;
  }

  isTooShort = userInput.length <= 5;
  if (isTooShort) {
    alert('too short');
  }
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long');
