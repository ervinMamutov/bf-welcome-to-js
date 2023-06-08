'use strict';

/*
  environment: chrome

  name: SyntaxError
  message: Illegal continue statement: no surrounding iteration statement

  callstack: 24

  life cycle: exeption

  the mistake: incorrect use 'continue'

  the fix(es): delete 'continue'
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
}
