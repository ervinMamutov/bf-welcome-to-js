import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let right = readNumber('right');
  let left = readNumber('left');

  // --- multiply the numbers ---

  let multiply = right * left;

  // --- create a message ---

  let message = `${left} * ${right} === ${multiply} `;

  // --- display the message ---

  displayString('product', message);
});
