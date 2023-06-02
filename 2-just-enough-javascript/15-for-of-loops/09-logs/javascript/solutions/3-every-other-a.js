'use strict';

let language = ' j a v a s c r i p t';

let logIt = true;

for (let character of language) {
  if (logIt) {
    console.dir(character);
  }
  logIt != logIt;
}
