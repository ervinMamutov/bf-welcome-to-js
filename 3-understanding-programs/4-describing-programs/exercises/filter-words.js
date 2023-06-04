'use strict';

/*
   1. Filter words

   A user can enter a sentence with at least 2 words
   - given the users cancel they will be prompted again 
   - given the users input empty space they will be prompted again
   - given the users input less then 3 they will be prompted again

   test cases
   - given the users cancel
      no output -> 'there is no escape'
   - given the users input Ok
      no output -> '"" is too short to have two words'
   - given the users input empty space
      no output -> '-' this is bag -> not work correct
   - given the users input one word
      no output -> 'there is no space'
   - given the users input two word 'hello world'
      output -> 'do you want to keep this word' -> 'hello'
      input -> 'ok' -> output -> 'do you want to keep this word' -> 'world' 
      input -> ok -> output -> 'hello world'
   - given the users input two word 'hello world'
      output -> 'do you want to keep this word' -> 'hello'
      input -> 'cancel' -> output -> 'do you want to keep this word' -> 'world' 
      input -> ok -> output -> 'world'
    - the same behavior with three or more words

 */

let sentence = '';

let isValid = false;
while (!isValid) {
  sentence = prompt('enter a sentence with at least 2 words');

  if (sentence === null) {
    alert('there is no escape');
  } else if (sentence.length < 3) {
    alert('"' + sentence + '" is too short to have two words');
  } else if (!sentence.includes(' ')) {
    alert('there is no space');
  } else {
    isValid = true;
  }
}

sentence = sentence + ' ';

let newSentence = '';

let nextWord = '';
for (const character of sentence) {
  if (character === ' ') {
    const keep = confirm('do you want to keep this word:\n\n- ' + nextWord);
    if (keep) {
      newSentence = newSentence + character + nextWord;
    }
    nextWord = '';
  } else {
    nextWord = nextWord + character;
  }
}

alert(newSentence);
