'use strict';

/* No Repeats

  A user can input some text and learn if it has any repeated characters.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        they are told so
    - given their input has at no repeated characters:
        they are told so

  test cases:
    contains no repeated characters:
      ' '           ->   '" " has no repeats'
      'abc'         ->   '"abc" has no repeats'
      'market'      ->   '"market" has no repeats'
      'toad'        ->   '"toad" has no repeats'
    contains 1 repeated character:
      '  '          ->  '"  " has at least one repeat'
      'aa'          ->  '"aa" has at least one repeat'
      'aba'         ->  '"aba" has at least one repeat'
      'abac'        ->  '"abac" has at least one repeat'
      'JavaScript'  ->  '"JavaScript" has at least one repeat'
    contains more than 1 repeated characters:
      '   '         ->  '"   " has at least one repeat'
      'abacada'     ->  '"abacada" has at least one repeat'
      'abcdefggg'   ->  '"abcdefggg" has at least one repeat'
      '.@@..@@.'    ->  '".@@..@@." has at least one repeat'

*/

/* --- gather user input --- */

let message = null;
let resultRepeat = 0;

while (!message) {
  message = prompt('enter text containing any repeating characters');

  if (message === null) {
    alert('Please, dont press "cansel"');
    continue;
  }

  if (message === '') {
    alert("Please don't enter empty string");
    continue;
  }
}

/* --- check if the input has any repeated characters --- */
let uniqueCharacter = '';

for (const character of message) {
  if (!uniqueCharacter.includes(character)) {
    uniqueCharacter += character;
  } else {
    resultRepeat++;
  }
  
}

//  store the search results as a boolean

/* --- create a message for the user --- */

/* --- display the message to the user --- */

if (resultRepeat) {
  alert(`${message} has at ${resultRepeat} repeat. \n Unique characters ${uniqueCharacter}`);
  } else {
  alert(`${message} has no repeats`);
}
