'use strict';

/*

5. has-a-vowel.js

  A user can enter a some characters
   - given the users cancel they will be prompted again 
   - given the users input some characters

   test cases
   - given the users cancel
      no output -> 'enter some characters'
   - given the users input Ok
      output -> '"" has no vowels'
   - given the users input empty spacev
      output -> '"    " has no vowels'
   - given the users input other than the word 'aser'
      output -> '"aser" has at least one vowel'
   - given the users input '454545'
      output -> '"454545" has no vowels'
   
      
*/
let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const vowels = 'aeiouAEIOU';

let hasAVowel = false;
for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one vowel');
} else {
  alert('"' + characters + '" has no vowels');
}
