import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('skippable', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let inputValue = readString('phrase');
  let skipValue = readNumber('skip-size');
  let resultValue = '';

  // --- skip characters ---
  for (let i = 0; i < inputValue.length; i++) {
    if (i % skipValue !== 0) {
      resultValue += inputValue[i];
    } else {
      continue;     
    }
  }

  // --- display the result ---
  displayString('skipped', resultValue);
});
