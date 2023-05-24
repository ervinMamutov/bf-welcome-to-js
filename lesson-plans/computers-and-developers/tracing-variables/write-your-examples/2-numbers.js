'use strict';

/* Numbers

TODO: create a few variables(numbers):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/


let sum; // declared

let a = 198987; // declared & initialized

let b = 32324; // declared & initialized

sum = a + b; // read a, read b, initialized

console.log(`sum: ${a} + ${b}  = ${sum}`); // read a, read b, read sum

a = sum + b; // read sum, read b, reassigned a

console.log(`new a : ${sum} + ${b} = ${a}`); // read sum, read b, read a
