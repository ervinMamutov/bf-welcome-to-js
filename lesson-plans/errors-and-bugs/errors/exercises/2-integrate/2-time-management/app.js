import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: ReferenceError
  message: DisplayString is not defined

  location: 47

  life cycle:execution

  the mistake: wrong function name

  the fix(es): correct the function mame
*/

whenFormDataChanges('sleep-info', () => {
  console.log('--- form data changed ---');

  // --- read user input ---

  let isTired = readBoolean('tired');

  let hasTime = readBoolean('free-time');

  // --- generate advice ---

  let advice = '';
  if (isTired && hasTime) {
    advice = 'Take a nap!';
  } else if (!isTired && hasTime) {
    advice = 'Study some flashcards.';
  } else if (isTired && !hasTime) {
    advice = 'Make some coffee.';
  } else if (!isTired && !hasTime) {
    advice = 'Have a great day!';
  }

  // --- display the advice ---

  displayString('advice-area', advice);
});
