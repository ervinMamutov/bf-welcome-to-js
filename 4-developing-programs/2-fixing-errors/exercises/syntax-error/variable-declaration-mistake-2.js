// #todo

'use strict';

/*
  environment: chrome 

  name: SyntaxError
  message: Missing initializer in const declaration

  callstack: 22

  life cycle: exeption

  the mistake: incorrect initialised variable

  the fix(es): replace const to let 
*/

const userName = 'qopiznu';

let path;

if (userName.length > 4) {
  path = 'if';
} else {
  path = 'else';
}

console.log(path);
