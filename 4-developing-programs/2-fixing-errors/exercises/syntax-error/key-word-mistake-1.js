// #todo

'use strict';

/*
  environment: chrome

  name: SyntaxError
  message:  Unexpected strict mode reserved word

  callstack: 20

  life cycle: exeption

  the mistake: syntax error intstead of if should use for

  the fix(es): change if to for 
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
