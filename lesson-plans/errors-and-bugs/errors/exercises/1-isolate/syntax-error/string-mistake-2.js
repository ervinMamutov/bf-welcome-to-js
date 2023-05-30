'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Unexpected string

  location: 23

  life cycle: execution

  the mistake: '' is used instead of ""

  the fix(es):replace is '' by ""
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';
