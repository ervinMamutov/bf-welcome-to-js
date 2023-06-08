// #todo

'use strict';

/* specific

  _a -> shortValueValue:
  _b -> mediumValueValue:
  _c -> longValueValue:
  _d -> isInsideValueValue:
  _e -> inputResultResult:

*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let shortValue = 'shortValue:';
let mediumValue = 'mediumValue:';
let longValue = 'longValue:';

let isInsideValue = true;
while (isInsideValue) {
  let inputResult = prompt('enter something');

  if (inputResult === null) {
    isInsideValue = false;
  } else if (inputResult.length < 5) {
    shortValue = shortValue + '\n- "' + inputResult + '"';
  } else if (inputResult.length < 10) {
    mediumValue = mediumValue + '\n- "' + inputResult + '"';
  } else {
    longValue = longValue + '\n- "' + inputResult + '"';
  }
}

alert(shortValue + '\n\n' + mediumValue + '\n\n' + longValue);