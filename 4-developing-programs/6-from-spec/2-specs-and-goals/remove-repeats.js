// #todo

'use strict';

/* Remove Repeats

  A user can input some text and have all repeated characters removed.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        the repeats are removed and a before/after is displayed
    - given their input has at no repeated characters:
        nothing is changed and he initial input is displayed

    test cases:
    contains no repeated characters:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
      'toad'        ->   'toad'
    contains 1 repeated character:
      '  '          ->  '"  " -> " "'
      'aa'          ->  '"aa" -> "a"'
      'aba'         ->  '"aba" -> "ab"'
      'abac'        ->  '"abac" -> "abc"'
      'JavaScript'  ->  '"JavaScript" -> "JavScript"'
    contains more than 1 repeated characters:
      '   '         ->  '"   " -> " "'
      'abacada'     ->  '"abacada" -> "abcd"'
      'abcdefggg'   ->  '"abcdefggg" -> "abcdefg"'
      '.@@..@@.'    ->  '".@@..@@." -> ".@"'

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
