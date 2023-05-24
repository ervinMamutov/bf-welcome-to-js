'use strict';

/* Flip Five

the program takes a five-character word and returns an inverted word  

  Data In:

Gets the word and checks it

  Data Out:

If the word is 5 characters long, return the reverse word.

Otherwise a warning is returned.



  Test Cases: hello => olleh


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
