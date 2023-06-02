import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let input = readString('to-mirror');
  let mirror = ' | ';

  // --- mirror the text ---

  for (const character of input) {
    mirror = character + mirror + character;
  }

  // --- display the result ---

  displayString('output', mirror);
});
