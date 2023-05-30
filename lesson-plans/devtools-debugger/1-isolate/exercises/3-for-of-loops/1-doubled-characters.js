'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + '-' + nextChar + '-';
}

alert(`variant 1: ${doubled}`);
alert(`variant 2: ${doubled.slice(0, -1)}`);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
