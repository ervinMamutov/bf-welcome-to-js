'use strict'
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nametag', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const firstName = readString('first');
  const lastName = readString('last');

  // --- create a greeting ---
  const message = `Hello ${firstName} ${lastName}.`;

  // --- display the greeting ---
  displayString('greeting', message);
});
