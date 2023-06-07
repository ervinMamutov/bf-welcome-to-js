'use strict';

/*
17. your-name.js

  The programme specifies the user name.
    
  test cases
   - given the users cancel when prompted to enter: 'enter your name:' -> 'nothing is not a name'
      output -> they will be prompted again 
   - given the users input Ok when prompted to enter: 'enter your name:' -> 'nothing is not a name'
      output -> they will be prompted again 
   
   - given the users input when prompted to 'enter your name:' -> 'Ervin'
      output -> 'is this your name: "Ervin"' -> 
      'cansel' -> they will be prompted again 
      'OK' -> 'your name is: "Ervin"';
*/

let userInput = '';
while (true) {
  userInput = prompt('enter your name:');

  if (userInput === null || userInput === '') {
    alert('nothing is not a name');
    continue;
  }

  const userDidConfirm = confirm('is this your name: "' + userInput + '"');
  if (userDidConfirm) {
    break;
  }
}

alert('your name is: "' + userInput + '"');
