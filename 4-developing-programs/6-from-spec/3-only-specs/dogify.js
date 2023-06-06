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

function position(char, text) {
  let resulte = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === char) {
      resulte.push(i);
    } else {
      continue;
    }
  }
  return resulte;
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

const lowetCasePosition = position(lowetCaseWord.slice(0, 1), message);


let intermediateResult = message;
let voluePosition = 0;
let isDogInside = true;

while (isDogInside) {
  if (lowetCasePosition.length != 0) {
    voluePosition = lowetCasePosition.pop();
    resulteMessage +=
      intermediateResult.slice(0, voluePosition) + lowetCaseWord;
    intermediateResult = intermediateResult.slice(voluePosition + 1);
    isDogInside = true;
  } else {
    resulteMessage += intermediateResult;
    isDogInside = false;
  }
}

const upperCasePosition = position(upperCaseWord.slice(0, 1), resulteMessage);
intermediateResult = resulteMessage;
voluePosition = 0;
isDogInside = true;

while (isDogInside) {
  if (upperCasePosition.length != 0) {
    voluePosition = upperCasePosition.pop();
    
    resulteMessage +=
      intermediateResult.slice(0, voluePosition) + upperCaseWord;
    intermediateResult = intermediateResult.slice(voluePosition + 1);
    isDogInside = true;
  } else {
    resulteMessage += intermediateResult;
    isDogInside = false;
  }
}

alert(message + ' ' + lowetCasePosition + ' ' + resulteMessage);
//alert(message + upperCasePosition);
