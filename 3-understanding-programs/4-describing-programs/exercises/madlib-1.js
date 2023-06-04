'use strict';

/*

9. madlib-1.js

  A user can enter a some none, verb and adjective 
   - given the users cancel they will be prompted again 
   - given the users input some characters

   test cases
   - given the users cancel when prompted to enter: none, verb and adjectiv
      output -> they will be prompted again 
   - given the users input Ok when prompted to enter: none, verb and adjectiv
      output -> 'the   likes to ' 
   - given the users input when prompted to enter: none - 'world', verb - 'walk' and adjectiv - 'light'
      output -> 'the light  world likes to walk'
   
*/

let noun = null;
while (noun === null) {
  noun = prompt('enter a noun');
}

let verb = null;
while (verb === null) {
  verb = prompt('enter a verb');
}

let adjective = null;
while (adjective === null) {
  adjective = prompt('enter an adjective');
}

const madlib = 'the ' + adjective + ' ' + noun + ' likes to ' + verb;

alert(madlib);
