'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  location: 22

  life cycle: execution

  the mistake: double declaration of a variable

  the fix(es): delete the second variable declaration
*/

let tree = 'oak';

tree = 'birch';
