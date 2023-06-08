'use strict';

const numbers = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];

for (const number of numbers) {
  console.log('---------------------------');
  console.log(number + ' is 1, 2 or 3');

  console.log(number + ' is equal to 1');
  console.log(number === 1);

  console.log(number + ' is equal to 2');
  console.log(number === 2);

  console.log(number + ' is equal to 3');
  console.log(number === 3);

  console.log(number + ' is equal to 1 OR is equal to 2 OR is equal to 3');
  console.log(number === 1 || number === 2 || number === 3);
}

/* 

// let number = 0; // false
// let number = 0.5; // false
// let number = 1; // true
// let number = 1.5; // false
let number = 2; // true
// let number = 2.5; // false
// let number = 3; // true
// let number = 3.5; // false
// let number = 4; // false

console.log(number + ' is 1, 2 or 3');

// number is equal to 1
console.log(number === 1);

// number is equal to 2
console.log(number === 2);

// number is equal to 3
console.log(number === 3);

// number is equal to 1 OR is equal to 2 OR is equal to 3
console.log(number === 1 || number === 2 || number === 3);


*/
