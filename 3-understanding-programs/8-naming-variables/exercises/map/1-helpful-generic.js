'use strict';

/* generic

  _a -> input:
  _b -> output:
  _c -> char:
  
*/

let input = null;
while (input === null) {
  input = prompt('enter some text, can you guess what the program does?');
}

let output = '';
for (let char of input) {
  if ('aeiou'.includes(char)) {
    output = output + char.toUpperCase();
  } else if ('AEIOU'.includes(char)) {
    output = output + char.toLowerCase();
  } else {
    output = output + char;
  }
}

alert(output);
