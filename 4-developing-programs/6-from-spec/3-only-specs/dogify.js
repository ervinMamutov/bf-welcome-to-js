// #todo

'use strict';

/* Dogify

  A user can input some text and all "d"s will be replaced with "dog".
    - given the user cancels:
        they are prompted again
    - given their input has any lower case "d"s:
        all "d"s are replaced with "dog"
    - given their input has any upper case "D"s:
        all "D"s are replaced with "DOG"
    - given their input has any upper & lower case "d"s:
        all "d"s are replaced with "dog"
        and all "D"s are replaced with "DOG"

  test cases:
    contains no "d"s:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
    contains lower case "d"s:
      'd'           ->  'dog'
      'toad'        ->  'toadog'
      'disk'        ->  'dogisk'
      'Iddam'       ->  'Idogdogam'
    contains upper case "d"s:
      'D'           ->  'DOG'
      'ToaD'        ->  'ToaDOG'
      'Disk'        ->  'DOGisk'
      'iDDam'       ->  'iDOGDOGam'
    contains both upper and lower "d"s:
      'dD'          ->  'dogDOG'
      'Do dump'     ->  'DOGo dogump'
      'dim mooD'    -> 'dogim mooDOG'
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
