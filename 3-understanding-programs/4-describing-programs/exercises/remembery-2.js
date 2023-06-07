'use strict';

/*

13. remembery-2.js

  The first player enters a tree phrase.
  The second player has three chances to guesse all it.
  
  test cases
   - given the users input when prompted to:
      output -> 'Player 1, enter your first secret:' -> 'sun' -> 
      'Player 1, enter your second secret:' -> 'moon' ->
      'Player 1, enter your third secret:' -> 'sky'
      'Player 1, guess the first secret:' -> 'sun'
      'Player 1, guess the second secret:' -> 'moon'
      'Player 1, guess the third secret:' -> 'sky'

      -> your score: 3

   
*/

alert(`Guess 3 secrets in 3 tries

  Player 1:
    enter three secrets

  Player 2:
    see the three secrets in order
    then enter them back in order
    if you get one wrong - game over!
`);

alert('Player 2: go hide');

const secret1 = prompt('Player 1, enter your first secret:');
const secret2 = prompt('Player 1, enter your second secret:');
const secret3 = prompt('Player 1, enter your third secret:');

alert('Player 2, get back here');

alert(
  'Player 2, remember these:' +
    '\n1. "' +
    secret1 +
    '"' +
    '\n2. "' +
    secret2 +
    '"' +
    '\n3. "' +
    secret3 +
    '"',
);

let score = 0;

const firstTry = prompt('Player 1, guess the first secret:');
if (firstTry === secret1) {
  score = score + 1;

  const secondTry = prompt('Player 1, guess the second secret:');
  if (secondTry === secret2) {
    score = score + 1;

    const thirdTry = prompt('Player 1, guess the third secret:');
    if (thirdTry === secret3) {
      score = score + 1;
    }
  }
}

alert('your score: ' + score);
