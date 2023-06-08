'use strict';

/*
  environment: chrome

  name: ReferenceError
  message: isValidUserName is not defined

  callstack: 29

  life cycle: exeption

  the mistake: variable is not defined

  the fix(es): defined varaible
*/

const userName = 'chiobin';
let isValidUserName;

console.log('userName:', typeof userName, userName);

if (userName.length > 4) {
  isValidUserName = true;
} else {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
