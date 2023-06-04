'use strict';

/*

10. madlib-2.js

  A user can enter a some none, verb and adjective 
   - given the users cancel they will be prompted again 
   - given the users input some characters

   test cases
   - given the users cancel when prompted to enter: none, verb and adjectiv
      output -> they will be prompted again 
   - given the users input Ok when prompted to enter: none, verb and adjectiv
      output -> 'the   likes to ' 
   - given the users input when prompted to enter: none - 'day', verb - 'make' and adjectiv - 'like'
      output -> 'the like day likes to make'
   
*/

let adjective = null;
while (adjective === null) {
  adjective = prompt('enter an adjective');
}

let noun = null;
while (noun === null) {
  noun = prompt('enter a noun');
}

let verb = null;
while (verb === null) {
  verb = prompt('enter a verb');
}

let phrase = 'the ';
phrase = phrase + adjective + ' ';
phrase = phrase + noun + ' likes to ';
phrase = phrase + verb;

alert(phrase);
