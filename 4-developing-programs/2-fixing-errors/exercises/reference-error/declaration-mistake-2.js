'use strict';

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  callstack: 24

  life cycle: execution

  the mistake: access 'isValidUserName' before initialization 

  the fix(es): define variable before initialization 
*/

const userName = 'chiobin';
let isValidUserName;
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
