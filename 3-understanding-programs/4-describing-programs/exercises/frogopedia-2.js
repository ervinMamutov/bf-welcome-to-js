'use strict';

/*

3. frogopedia-2

  A user can enter a sentence about frog
   - given the users cancel they will be prompted again 
   - given the users input empty space they will be prompted again
   - given the users input word without 'frog' they will be prompted again

   test cases
   - given the users cancel
      no output -> 'that is not something'
   - given the users input Ok
      no output -> 'that is not something'
   - given the users input empty spacev
      no output -> 'nope, not about frogs.  try again.'
   - given the users input other than the word frog
      no output -> 'nope, not about frogs.  try again.'
   - given the users input one word 'forg'
      output -> 'i just learned something cool abouts frogs!' -> 'frog'
   - given the users input two word 'forg frog'
      output -> 'i just learned something cool abouts frogs!' -> 'forg frog'
   - given the users input two word: first - frog and second - other 'forg help'
      output -> 'i just learned something cool abouts frogs!' -> 'forg help' 
      

*/

const animalName = 'frog';

let userInput = '';

let isNotFroggy = true;
while (isNotFroggy === true) {
  userInput = prompt('tell me something about frogs');

  if (userInput === '' || userInput === null) {
    alert('that is not something');
  } else if (userInput.toLowerCase().includes(animalName)) {
    isNotFroggy = false;
  } else {
    alert('nope, not about frogs.  try again.');
  }
}

alert('i just learned something cool about frogs!\n\n- "' + userInput + '"');
