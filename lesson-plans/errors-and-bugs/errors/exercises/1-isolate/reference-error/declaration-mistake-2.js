'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome

  name: ReferenceError
  message: VM251:24 Uncaught ReferenceError: Cannot access 'isValidUserName' before initialization

  location: 24

  life cycle:execution

  the mistake:  Accessing is variable before initialisation
  
  the fix(es): Drclaring a variable before accessing it
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
