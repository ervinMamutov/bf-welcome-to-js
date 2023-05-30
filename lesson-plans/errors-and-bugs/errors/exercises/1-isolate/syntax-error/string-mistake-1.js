'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid or unexpected token

  location: 23

  life cycle: execution

  the mistake: unnecessary line break

  the fix(es):remove line break
*/

const a = 'this is two lines';
