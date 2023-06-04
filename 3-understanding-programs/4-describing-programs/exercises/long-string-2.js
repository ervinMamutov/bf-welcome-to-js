'use strict';

/*

8. long-string-2.js

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
let anything = '';

while (true) {
  anything = prompt('enter anything longer than 5 characters');

  if (anything === null) {
    alert('there is no escape');
    continue;
  }

  if (anything.length <= 5) {
    alert('too short');
    continue;
  }

  break;
}

alert('"' + anything + '" is ' + anything.length + ' characters long');
