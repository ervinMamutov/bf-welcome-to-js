'use strict';

/* title: long phrase

  description: search for a word according to given parameters

  user story + acceptance criteria: The user enters text. Then enter the characters to make sure it does or does not contain text.


  test cases

  qwertyazerty -> qw -> 'qwertyazerty" does include "qw"'
*/


let longPhrase = null;
let searchQuery = null;
let checking;
let isLongPhrase = false;

while(!isLongPhrase) {
  longPhrase = prompt ('enter a long phrase (at least 10 characters)');

  if (longPhrase === null) {
    continue;
  };

  if (longPhrase === '') {
    alert('not long enough');
    continue;
  }

  if (longPhrase.length < 10) {
    alert('not long enough');
    isLongPhrase = false;
    continue;
  }

  if (longPhrase.length >= 10) {
    alert(`is this phrase correct: ${longPhrase}`);
  }

  if (confirm(`is this phrase correct: ${longPhrase}`)) {
    break;
  } else {
    continue;
  }
};

while (!isLongPhrase) {
  searchQuery = prompt('enter a search query, this program will check if it exists in your phrase');

  if (searchQuery === null) {
    continue;
  };

  if (confirm(`is this query correct: ${searchQuery}`)) {
    break;
  } else {
    isLongPhrase = false;
    continue;
  }
};

if (longPhrase.includes(searchQuery)) {
  alert (`${longPhrase} does include ${searchQuery}`);
} else {
  alert (`${longPhrase} does not include ${searchQuery}`);
};







