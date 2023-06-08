'use strict';

/*
  refactor this program so the final message is stored in a separate variable
  alert the final message after the conditional statement
*/

let mayHaveDuplicates = null;
const finalMessage = 'well done!';
const conditionalStatement = 'too bad, try again';

while (mayHaveDuplicates === null) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');
}

let hasNoDuplicates = '';
for (let char of mayHaveDuplicates) {
  let isDuplicate = hasNoDuplicates.includes(char);
  if (isDuplicate) {
    break;
  }
  hasNoDuplicates = hasNoDuplicates + char;
}

if (hasNoDuplicates.length !== mayHaveDuplicates.length) {
  alert(conditionalStatement);
} else {
  alert(finalMessage);
}
