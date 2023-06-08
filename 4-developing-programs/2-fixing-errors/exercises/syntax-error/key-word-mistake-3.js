'use strict';

/*
  environment: chrome 

  name: SyntaxError
  message: Unexpected token '{'

  callstack: 25

  life cycle: exeption

  the mistake: incorrect use 'else'

  the fix(es): add if
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
