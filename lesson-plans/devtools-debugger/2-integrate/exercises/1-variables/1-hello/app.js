// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firsName = readString('the-first-name');
  let lastName = readString('the-last-name');

  let fullName = firsName + ' ' + lastName;

  console.log(fullName);

  // --- create a message ---

  let greeting = 'Hello ' + fullName + '!';
  let goodBay = 'Goodbay ' + fullName + '!';

  // --- display the message ---

  displayString('greeting-output', greeting);
  displayString('good-bay', goodBay);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
