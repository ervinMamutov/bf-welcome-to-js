'use strict';

/*

11. mirror.js

  A user can enter a some none, verb and adjective 
   - given the users cancel they will be prompted again 
   - given the users input some characters

   test cases
   - given the users cancel when prompted 
      output -> 'enter some text, it will be mirrored' -> they will be prompted again 
   - given the users input Ok when prompted
      output -> '|' 
   - given the users input when prompted to enter 'qwerty'
      output -> 'ytrewq|qwerty'
   
*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (const character of text) {
  mirrored = character + mirrored + character;
}

alert(mirrored);
