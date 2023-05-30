'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: 20

  life cycle: execution

  the mistake:Accessing a variable befor declaring it

  the fix(es): Declaring a variable before accessing it 
*/

let tomatoes = 'fresh';

console.log(tomatoes);
