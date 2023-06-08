'use strict';

/* generic

  _a -> input
  _b -> output
  _c -> isOutput

*/

 
let input = null;
while (input === null) {
  input = prompt('enter an animal');
}

let output = '';

let isOutput = false;
while (!isOutput) {
  output = prompt('tell me something about ' + input);

  if (output === '' || output === null) {
    alert('that is not something');
  } else if (output.toLowerCase().includes(input.toLowerCase())) {
    isOutput = true;
  } else {
    alert('nope, not about ' + input + '.  try again.');
  }
}

alert('i just learned something cool about ' + input + '!\n\n- "' + output + '"');