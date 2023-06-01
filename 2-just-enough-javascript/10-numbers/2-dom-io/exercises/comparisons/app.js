// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  const right = readNumber('right-num');
  const left = readNumber('left-num');

  // --- compare the numbers ---

  const more = left > right;
  const moreEqual = left >= right;
  const equal = left === right;
  const less = left < right;
  const lessEqual = left <= right;

  // --- create a message

  const result = ` ${left} > ${right} ----> ${more} \n ${left} >= ${right} ---> ${moreEqual} \n ${left} === ${right} --> ${equal} \n ${left} <= ${right} ---> ${lessEqual} \n ${left} < ${right} ----> ${less} `;

  // --- display the message ---
  displayString('compared', result);
});
