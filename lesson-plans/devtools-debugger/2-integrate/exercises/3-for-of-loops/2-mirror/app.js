import {
  whenFormDataChanges,
  readString,
  displayString,
  readBoolean,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');
  let middleCharacter = readString('middle-character');
  let checkUpperCase = readBoolean('loud-upper');
  let checkLowerCase = readBoolean('loud-lower');

  // --- mirror the text ---

  let mirrored = ' ' + middleCharacter + ' ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  let finalText = '';

  if (checkUpperCase) {
    finalText = mirrored.toUpperCase();
  } else if (checkLowerCase) {
    finalText = mirrored.toLowerCase();
  } else {
    finalText = mirrored;
  }

  displayString('output', finalText);
});

/*  ===== Challenges =====

  - make the mirror image upper case
  - make the non-mirror image lower case
  - let the user decide which character goes in the middle
      for example, any of these should be possible:
        asdf * fdsa
        asdf & fdsa
        asdf - fdsa
        asdf o fdsa
        ...
      you will need to add an input to the HTML file

*/
