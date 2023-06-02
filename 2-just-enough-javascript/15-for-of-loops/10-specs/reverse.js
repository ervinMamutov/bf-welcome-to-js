// #todo

'use strict';

/*
  a user can input a non-empty string and it will be reversed
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the reversed input will be displayed

  test cases:
    'hello' -> 'olleh'
    'p' -> 'p'
    'JavaScript' -> 'tpircSavaJ'

*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = null;
while (!input) {
  input = prompt(' enter value, my friend ');
  if (input === null) {
    alert("Don't back down and don't give up, my friend");
    continue;
  }
  if (input === '') {
    alert('Emptiness is not your way');
    continue;
  }
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '';
let toExeption = '1234567890~`!@#$%^&*()_+-=<>,.?/|\\;:"\' ';

/* --- create final output --- */

for (let character of input) {
  if (toExeption.indexOf(character) === -1) {
    output = character + output;
  } else {
    continue;
  }
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] linting check passes
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [x] all of the test cases work
    [x] you tested strange inputs that could break your program (edge cases)
*/
