import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  let searchThis = readString('text');
  let findThis = readString('query');

  let caseSensitive = readBoolean('sensitive');
  let caseCapital = readBoolean('capital');
  let caseMiddle = readBoolean('middle');

  // --- do the search ---

  let doesExist = false;
  let doesExistCapitall = false;
  let doesExistMiddle = false;

  if (caseSensitive) {
    doesExist = searchThis.includes(findThis);
  } else {
    let smallSearchThis = searchThis.toLowerCase();
    let smallFindThis = findThis.toLowerCase();
    doesExist = smallSearchThis.includes(smallFindThis);
  }

  if (caseCapital) {
    doesExistCapitall = searchThis.includes(findThis);
  } else {
    let bigSearchThis = searchThis.slice(0, 1).toUpperCase();
    let bigFindThis = findThis.slice(0, 1).toUpperCase();
    doesExistCapitall = bigSearchThis.includes(bigFindThis);
  }

  if (caseMiddle) {

  }

  // --- create the message ---

  let message = '';

  if (doesExist) {
    message = 'yes';
  } else {
    message = 'no';
  }

  if (doesExistCapitall) {
    message = 'yes';
  } else {
    message = 'no';
  }

  // --- display the search results ---

  displayString('search-result', message);
});

/*  ===== Challenges =====

  - display a more helpful message than "yes" or "no"
  - change the conditional so the `if` is NOT case sensitive and the `else` is

*/
