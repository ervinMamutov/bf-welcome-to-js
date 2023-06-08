'use strict';

/*
  environment: chrome

  name: SyntaxError
  message: Unexpected token 'for'

  callstack: 20

  life cycle: exeption

  the mistake: incorrect use 'for'

  the fix(es): delete 'const' and '='
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
