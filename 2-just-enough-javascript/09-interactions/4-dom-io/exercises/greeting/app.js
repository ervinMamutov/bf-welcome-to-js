// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nametag', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firstName = readString('first');
  let lastName = readString('last');

  // --- create a greeting ---
  let secretSolution = `Hi \n don't forget \n your name dear\n ${firstName} ${lastName}`; 

  // --- display the greeting ---
  displayString('secret-solution', secretSolution);
});
