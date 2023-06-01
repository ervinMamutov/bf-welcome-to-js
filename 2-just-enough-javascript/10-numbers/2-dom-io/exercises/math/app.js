// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const rigth = readNumber('right-num');
  const left = readNumber('left-num');

  // --- do the math ---
  const adding = left + rigth;
  const minus = left - rigth;
  const multiplication = left * rigth;
  const division = left / rigth;
  const module = left % rigth;

  // --- create a message

  const message = ` ${left} + ${rigth} === ${adding} \n ${left} - ${rigth} === ${minus} \n ${left} * ${rigth} === ${multiplication} \n ${left} / ${rigth} === ${division} \n ${left} % ${rigth} === ${module} \n`;

  // --- display the message ---
  displayString('sum', message);
});
