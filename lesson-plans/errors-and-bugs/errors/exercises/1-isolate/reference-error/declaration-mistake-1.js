'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Uncaught ReferenceError: welf is not defined

  location: 20

  life cycle:execution

  the mistake: Not declared a local variable const or let

  the fix(es): Declared a local variable const
*/

const welf = 'ingrad';

console.log(welf);
