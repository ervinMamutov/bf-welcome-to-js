'use strict';

let backwards = 'tpircsavaj';

// use a for-of loop to reverse `backwards`
let reverseLanguage = '';

for (const character of backwards) {
  reverseLanguage = character + reverseLanguage;
}
//  assign the reversed string to `language`
let language = reverseLanguage;

for (const character of language) {
  console.log(character);
}

// log each character in `language`
