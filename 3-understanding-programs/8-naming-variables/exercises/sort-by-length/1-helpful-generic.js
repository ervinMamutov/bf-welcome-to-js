'use strict';

/* generic

  _a -> short:
  _b -> medium:
  _c -> long:
  _d -> isInside:
  _e -> input:
  

*/

alert(
  'enter many strings, they will be sorted by length.\n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let short = 'short:';
let medium = 'medium:';
let long = 'long:';

let isInside = true;
while (isInside) {
  let input = prompt('enter something');

  if (input === null) {
    isInside = false;
  } else if (input.length < 5) {
    short = short + '\n- "' + input + '"';
  } else if (input.length < 10) {
    medium = medium + '\n- "' + input + '"';
  } else {
    long = long + '\n- "' + input + '"';
  }
}

alert(short + '\n\n' + medium + '\n\n' + long);