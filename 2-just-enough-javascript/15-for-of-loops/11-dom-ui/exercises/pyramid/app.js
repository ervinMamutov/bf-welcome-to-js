import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let input = readString('pyramid-bricks');
  let textPyramid = '\n';
  let midalPyramid = '';

  // --- build a pyramid ---

  for (const character of input) {
    midalPyramid += character;
    textPyramid += midalPyramid + '\n';
  }

  // --- display the pyramid ---
  displayString('out', textPyramid);
});
