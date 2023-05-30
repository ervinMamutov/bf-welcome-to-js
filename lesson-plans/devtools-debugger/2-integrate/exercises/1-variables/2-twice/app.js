// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  // read a string from the <input> with id "to-double"
  let text = readString('to-double');

  // --- repeat the text ---
  for (let i = 1; i < 5; i++) {
    let repeated = i + '. ' + text + '\n' + i + '. ' + text;
    let doubledInput = `doubled-input-${i}`;

    // --- display the repeated text ---

    // display a string to the <pre> with id "doubled-input"
    displayString(`${doubledInput}`, repeated);
  }
});

/*  ===== Challenges =====

  - Copy the user's text 4 times
  - Number the copies like this:
    1. asdf
    2. asdf
    3. asdf
    4. asdf

*/
