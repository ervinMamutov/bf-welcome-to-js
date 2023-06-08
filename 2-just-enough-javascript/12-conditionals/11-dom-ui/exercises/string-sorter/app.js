import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  const stringA = readString('string-a');
  const stringB = readString('string-b');
  let result;

  // --- sort them input by length ---

  if (stringA.length === stringB.length) {
    result = `${stringA} \n${stringB}`;
  } else {
    if (stringA.length > stringB.length) {
      result = `${stringB} , ${stringA}`;
    } else {
      result = `${stringA}, ${stringB}`;
    }
  }

  // --- display the sorted strings ---

  displayString('sorted', result);
});
