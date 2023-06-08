'use strict';

/*
  environment: chrome 

  name: SyntaxError
  message: Unexpected end of input

  callstack: 29

  life cycle: exeption

  the mistake: no closing curly braces

  the fix(es): add clissing curly braces
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
