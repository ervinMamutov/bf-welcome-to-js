'use strict';

/* Has a Dog

  A user can input some text and learn if it has "dog" in it (upper or lower case).
    - given the user cancels:
        they are prompted again
    - given their input does not have "dog" (in any case):
        they are told there is no dog
    - given their input does have a "dog" (in any case):
        they are told their input has at least one dog

  test cases:
    contains no dogs:
      ' '           ->   'no dogs'
      'abc'         ->   'no dogs'
      'market'      ->   'no dogs'
    contains at one or more dogs:
      'dog'         ->  'at least one dog'
      'DOG'         ->  'at least one dog'
      'dOg'         ->  'at least one dog'
      'godogo'      ->  'at least one dog'
      'GOdoGO'      ->  'at least one dog'
      'A fast dog.' ->  'at least one dog'
*/

let message = null;

const lowetCaseWord = 'dog';
const upperCaseWord = 'DOG';

let resulteMessage = '';

// The function gets two words and text as parametrs
function newWord(charOne, charTwo, text) {
  let resulteText = '';
  let intermediateResult = text;
  let remainder = '';
  let findCharOne = 0;
  let findCharTwo = 0;


  for (const character of text) {
    let position = intermediateResult.indexOf(character);
    if (character === charOne.slice(0, 1)) {
      resulteText += intermediateResult.slice(0, position) + charOne;
      intermediateResult = intermediateResult.slice(position + 1);
      findCharOne++;
    } else if (character === charTwo.slice(0, 1)) {
      resulteText += intermediateResult.slice(0, position) + charTwo;
      intermediateResult = intermediateResult.slice(position + 1);
      findCharTwo++;
    } else {
      remainder = intermediateResult;
    }
  }

  // The function returns the new tex,
  // in which the characters on the words 
  // have been replaced whith the specified words
  const finalText = resulteText + remainder;
  return alert( ` We gets word ${text} and find \n ${findCharOne} little ${charOne} \n and \n ${findCharTwo} big ${charTwo}. \n\n  and got a new word as a result ${finalText}` );
}

while (!message) {
  message = prompt('Enter the text and I maybe will change it');

  if (message === null) {
    alert('Don\'t you want to see a new text. \n Don\'t press "cancel" ');
    continue;
  }

  if (message === '') {
    alert("Don't you want to see a new text. \n Don't enter empty string ");
    continue;
  }
}

resulteMessage = newWord(lowetCaseWord, upperCaseWord, message);


