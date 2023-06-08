'use strict';

import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  const text = readString('text');
  const character = readString('character');
  const charIndex = readNumber('i');
  let result = '';

  // --- check the index ---
  if (character === '' || character.length > 1) {
    result = 'oops!  you entered more than one character';
  } else {
    if (text[charIndex] === character) {
      result = 'yes';
    } else {
      result = 'no';
    }
  }

  // --- display the search results ---

  displayString('search-result', result);
});
