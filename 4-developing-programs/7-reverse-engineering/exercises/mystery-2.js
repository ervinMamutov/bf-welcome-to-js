'use strict';

/* title: removed

  descriptionthis: program to delete words you don't like

  user story + acceptance criteria: The user needs to delete the words they don't like

  test cases : 

*/

let dontLikeWords = null;
let someText = null;
let resultWord = '';

while (!dontLikeWords) {
  dontLikeWords = prompt("enter something you don't like");

  if (dontLikeWords === null) {
    continue;
  }

  if (dontLikeWords === '') {
    continue;
  }
}

while (!someText) {
  someText = prompt(
    `enter some text, the program will remove ${dontLikeWords}`);

  if (someText === null) {
    continue;
  }

  if (someText === '') {
    continue;
  }
}

resultWord = someText.split(dontLikeWords).join('');

alert(`befor ${someText} \n\n remove ${dontLikeWords} \n\n after ${resultWord}`);
