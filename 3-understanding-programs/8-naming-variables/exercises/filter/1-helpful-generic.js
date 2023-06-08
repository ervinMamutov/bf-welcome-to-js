'use strict';

/*
  _a -> input
  _b -> output
  _c -> char
  _d -> cheking
    

*/

let input = null;
while (input === null) {
  input = prompt('enter some text, the program will remove all vowels');
}

let output = '';
for (let char of input) {
  let cheking = 'aeiou'.includes(char.toLowerCase());
  if (!cheking) {
    output = output + char;
  }
}

alert(output);
