'use strict';

/*
14. remove-duplicates.js

  The program deletes duplicate characters.
    
  test cases
   - given the users cancel when prompted to enter: 'enter something with duplicated letters, they will be removed'
      output -> they will be prompted again 
   - given the users input Ok when prompted to enter: 'enter something with duplicated letters, they will be removed'
      output -> '' 
   
   - given the users input when prompted to:
      output -> 'enter something with duplicated letters, they will be removed' -> 'aassddffgg' -> 'asdfg
  
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
  }
  previous = next;
}

alert(noRepetitions);
