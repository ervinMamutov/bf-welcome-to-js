'use strict';

/* let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);
 */
/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

let firstName = prompt('enter your First Name');
let lastName = prompt('enter your Last Name');

let message = '';

if (firstName === null || firstName === '' && lastName === null || lastName === '') {
  message = 'How are your my anonymous friend?'
} else {
  message = `Hi, ${firstName} ${lastName}`;
};

alert(message);
