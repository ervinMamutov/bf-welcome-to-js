'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: 25

  life cycle: execution 

  the mistake: incorrect recording of reassignes variables 

  the fix(es): adjasting the order in which the variable is assigned
*/

let isHappy = false;

isHappy = true;
