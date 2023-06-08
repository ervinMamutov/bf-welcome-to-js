'use strict';

/*
  refactor this program so it uses a `while` loop instead of a `for-of` loop
*/

let toBeFrogged = null;
const frogWord = 'frog';
const wordFrog = 'FROG';

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';
let isFrogInside = true;
let frogNewWorld = '';
let toBeFroggesIntermediateValue = toBeFrogged;
let fPosition = 0;

/*
const replace = (character, string, word) => {
  let result = '';
  let check = true;
  let char = character;
  let position = 0;
  let text = string;

  if (text.indexOf(char) != -1) {
      position = text.indexOf(char);
      result += text.slice(0, position) + word;

      text = text.slice(position + 1);
      replace('f', string, frogWord);
      
    } else {
      result += text;
      check = false;
    }
    return result;
  };


frogNewWorld = replace('f', toBeFrogged, frogWord);

alert(frogNewWorld);
*/


while (isFrogInside) {
  if (toBeFroggesIntermediateValue.indexOf('f') != -1) {
    fPosition = toBeFroggesIntermediateValue.indexOf('f');
    frogNewWorld +=
      toBeFroggesIntermediateValue.slice(0, fPosition) +
      frogWord;

    toBeFroggesIntermediateValue = toBeFroggesIntermediateValue.slice(fPosition + 1);
    isFrogInside = true;
    
  } else {
    frogNewWorld += toBeFroggesIntermediateValue;
    fPosition = 0;
    isFrogInside = false;
  }

  if (toBeFroggesIntermediateValue.indexOf('F') != -1) {
    fPosition = toBeFroggesIntermediateValue.indexOf('F');
    frogNewWorld +=
      toBeFroggesIntermediateValue.slice(0, fPosition) +
      wordFrog;

    toBeFroggesIntermediateValue = toBeFroggesIntermediateValue.slice(fPosition + 1);
    isFrogInside = true;
    
  } else {
    frogNewWorld += toBeFroggesIntermediateValue;
    isFrogInside = false;
  }
} 

alert(frogNewWorld);

