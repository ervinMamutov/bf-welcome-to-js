'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  --- experiments ---

  1. FAILING: JavaScript
      EXPECT: 'you entered "JavaScript"'
      ACTUAL: 'you entered'

    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  --- lessons learned ---


*/

let message = 'you entered';
let input = null;

while (!input) {
  input = prompt('enter something');

  if (input === '') {
    continue;
  }
}

message = `${message} "${input}"`;

alert(message);
