'use strict';

let language = 'j a v a s c r i p t ';

let logIt = true;

// do it

for (const charackter of language) {
  if (logIt) {
    console.log(charackter);
  } else {
    console.log('$');
  }
}
