'use strict';

/*
  refactor this program so the I/O loop DOES NOT accept strings with duplicate characters
  hints:
    - one strategy is moving the `for-of` loop inside the I/O loop
    - you might want to try using a boolean flag for the I/O loop (or true/break/continue)

*/

let mayHaveDuplicates = '';
let duplicateDetecter = null;
let result = '';

const cheakDuplicates = (text) => {
  let result = '';

  if (text !== null) {
    for (const characters of text) {
      if (!result.includes(characters)) {
        result += characters;
      } else {
        result = '';
        return result;
      }
    }
  } else {
    result = '';
    return result;
  }
  return result;
};

while (cheakDuplicates) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');
  result = cheakDuplicates(mayHaveDuplicates);
  if (result) {
    break;
  }
  alert('try again');
}

alert('well done! ' + result);
