'use strict';

const numbers = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];

for (let number of numbers) {
  console.log('---------------------------');

  console.log(number + ' between 1 and 2, OR between 4 and 5 (inclusive)');

  console.log(
    number +
      ' is greater than or equal to 1 AND is less than or equal to 2 (inclusive)',
  );
  console.log(number >= 1 && number <= 2);

  console.log(
    number +
      ' is greater than or equal to 4 AND is less than or equal to 5 (inclusive)',
  );
  console.log(name >= 4 && number <= 5);

  console.log(number + ' between 1 and 2 OR between 4 and 5 (inclusive)');
  console.log((number > 1 && number < 2) || (number > 4 && number < 5));
}
/* 
  
// let number = 0;
// let number = 0.5;
// let number = 1;
let number = 1.5;
// let number = 2;
// let number = 2.5;
// let number = 3;
// let number = 3.5;
// number = 4;
// let number = 4.5;
// let number = 5;
number = 5.5;
// let number = 6;

console.log(number + ' between 1 and 2, OR between 4 and 5 (inclusive)');

// number is greater than or equal to 1 AND is less than or equal to 2 (inclusive)
console.log(number >= 1 && number <= 2);

// number is greater than or equal to 4 AND is less than or equal to 5 (inclusive)
console.log(name >= 4 && number <= 5);

// number between 1 and 2 OR between 4 and 5 (inclusive)
console.log((number > 1 && number < 2) || (number > 4 && number < 5));

*/
