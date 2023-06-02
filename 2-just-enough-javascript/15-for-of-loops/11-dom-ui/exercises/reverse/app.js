import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  // --- read the user's input ---
  const input = readString('to-reverse');
  let toReverse = '';

  // --- reverse this ---
  for (const character of input) {
    toReverse = character + toReverse;
  }

  // --- display the result ---
  displayString('output', toReverse);
});
