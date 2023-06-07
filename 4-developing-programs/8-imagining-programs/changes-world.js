'use strict';

/* 

title: changes-word.js

  description: this programe changes the words in the text according to the given conditions

  user story + acceptance criteria: the user enters text and it changes from letters to words

  test cases:
  'horSe' -> We gets word 'horSe' and  find  1 little 'horse' and  1 big 'SHEEP' and got a new word as a result 'horseorSHEEPe'

*/


let message = null;

const lowetCaseWord = 'horse';
const upperCaseWord = 'SHEEP';

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
  return alert( ` We gets word ${text} and \nfind \n ${findCharOne} little ${charOne} \n and \n ${findCharTwo} big ${charTwo}. \n\n  and got a new word as a result ${finalText}` );
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
