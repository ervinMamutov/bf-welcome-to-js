'use strict';

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  callstack: 20

  life cycle: execution

  the mistake: read variable before definition and initalisation 

  the fix(es): definition and initrialisation early
*/

const tomatoes = 'fresh';

console.log(tomatoes);
