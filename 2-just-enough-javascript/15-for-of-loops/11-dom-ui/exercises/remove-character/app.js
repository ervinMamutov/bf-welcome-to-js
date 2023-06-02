import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let inputPhrase = readString('phrase');
  let removeChar = readString('character');
  let result = '';
  /* let onlyOneText = 'you can only skip one character at a time'; */

  // --- remove the character if there is only one ---

  if (removeChar.length === 1) {
    for (let i = 0; i < inputPhrase.length; i++) {
      if (inputPhrase[i] !== removeChar) {
        result += inputPhrase[i];
      }
    }
  } else {
    result = 'you can only skip one character at a time';
    /*  break; */
  }

  // --- display the result ---

  /* if (removeChar.length === 1) { */
  displayString('filtered', result);
  /* } else {
    displayString('filtered', onlyOneText);
  } */
});
