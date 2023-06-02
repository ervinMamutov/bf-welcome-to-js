// #todo

'use strict';

/*
  a user can input a non-empty string and only the letters will be turned into a mirror
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the mirrored letters will be displayed

  test cases:
    only letters:
      'abc' -> 'abc|cba'
      'hello' -> 'hello|olleh'
      'JavaScript' -> 'JavaScript|tpircSavaJ'
    only not-letters:
      '.(-).' -> '|'
      '-=>|<=-' -> '|'
      '. - ^ - .' -> '|'
    mixed letters and not-letters:
      'hello!' -> 'hello|olleh'
      'good bye?' -> 'goodbye|eybdoog'
      'let input = ""' -> 'letinput|tupnitel'

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
let mirror = ' | ';

/* --- create final output --- */

for (let character of input) {
  if (toExeption.indexOf(character) === -1) {
    mirror = character + mirror + character;
  } else {
    continue;
  }
}
output = mirror.split(' | ').reverse().join(' | ');

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
