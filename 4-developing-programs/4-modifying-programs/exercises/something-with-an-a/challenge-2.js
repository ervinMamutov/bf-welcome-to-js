'use strict';

/*
  modify the program so it searches for "A" or "a"

  you will need to change one condition
  the user's instructions
  and strings used to generate a reaction

  looking for a challenge?
    tell the user whether their input has "a" or "A"
*/

const userInput = prompt('please enter something with an "a" or "A" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'nothing!  why !!! ??? !!!';
} else if (userInput.includes('a') || userInput.includes('A') ) {
  reaction = '"' + userInput + '" is perfect!';
} else {
  reaction = '"' + userInput + '" has no "a" and has no "A" in it';
}

alert(reaction);
