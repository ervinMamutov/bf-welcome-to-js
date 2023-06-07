'use strict';

/*
16. search.js

  The programme searches for a query in a phrase.
    
  test cases
   - given the users cancel when prompted to enter: 'enter a phrase to search'
      output -> they will be prompted again 
   - given the users input Ok when prompted to enter: 'enter a phrase to search' 
      output -> code running
   
   - given the users input when prompted to:
      output -> 'enter a phrase to search' -> 'qwerty' -> 'is this correct: "qwerty"' -> 
      'cansel' -> they will be prompted again 
      'OK' -> 'qwerty' -> 'do you want a case-sensitive search?';
      1. 'cancel' -> 'enter a phrase to search' -> 'Qw' -> 'is this correct: "Qw" -> 
        'cansel' -> they will be prompted again 
        'OK' -> ''qwerty' does include 'Qw' case senitive: false'

      2. 'Ok' -> 'enter a phrase to search' -> 'Qw' -> 'is this correct: "Qw" -> 
        'cansel' -> they will be prompted again 
        'OK' -> ''qwerty' does include 'Qw' case senitive: true'


*/


let phrase = '';

let userConfirmedPhrase = false;
while (!userConfirmedPhrase) {
  phrase = prompt('enter a phrase to search');
  if (phrase === null) {
    continue;
  }

  userConfirmedPhrase = confirm('is this correct: "' + phrase + '"');
}

const caseSensitive = confirm('do you want a case-sensitive search?');

let query = '';

let userConfirmedQuery = false;
while (!userConfirmedQuery) {
  query = prompt(
    'enter a search query, this program will check if it exists in your phrase',
  );
  if (query === null) {
    continue;
  }

  userConfirmedQuery = confirm('is this correct: "' + query + '"');
}

let phraseIncludesQuery;
if (caseSensitive) {
  phraseIncludesQuery = phrase.includes(query);
} else {
  const lowerCasePhrase = phrase.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();
  phraseIncludesQuery = lowerCasePhrase.includes(lowerCaseQuery);
}

let doesOrNot = '';
if (phraseIncludesQuery) {
  doesOrNot = 'does';
} else {
  doesOrNot = 'does not';
}

alert(
  '"' +
    phrase +
    '" ' +
    doesOrNot +
    ' include "' +
    query +
    '"\n\n' +
    'case sensitive: ' +
    caseSensitive,
);
