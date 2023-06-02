// #todo

'use strict';

/*
  a user can input a non-empty string and all characters which are not letters will be removed
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the extra characters will be removed

  test cases:
    only letters:
      'JavaScript' -> 'JavaScript'
      'abc' -> 'abc'
      'heLLO' -> 'heLLO'
    only not-letters:
      '.(-).' -> ''
      '-=>|<=-' -> ''
      '. - ^ - .' -> ''
    mixed letters and not-letters:
      'hello world!' -> 'helloworld'
      'let input = ""' -> 'letinput'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input = null;
while (!input) {
  input = prompt('enter text');
  if (input === null) {
    alert('My friend,  enter again');
    continue;
  }
  if (input === '') {
    alert('Please, enter again ');
    continue;
  }
}
console.log('input:', input);

/* --- declare characters to keep --- */

let toKeep = '1234567890~`!@#$%^&*()-_=+,<.>/?|;:"\' ';

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let charackter of input) {
  if (toKeep.indexOf(charackter) === -1) {
    output += charackter;
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
