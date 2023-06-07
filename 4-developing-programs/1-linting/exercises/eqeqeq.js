// #todo

'use strict';

/* https://eslint.org/docs/rules/eqeqeq

  you should never use == or !=, instead use === and !==

  this rule will help you avoid bugs caused by implicit coercion

*/

const time = 'Future';
const space = 'future';

let timeIsSpace = time;
timeIsSpace = space;

console.log(timeIsSpace);
