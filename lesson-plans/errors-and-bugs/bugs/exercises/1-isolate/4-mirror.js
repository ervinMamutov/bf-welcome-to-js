'use strict';

/*
  test cases:
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'


  experiment 1
    line: 28, 30
    why: delete while loop, because we use empty line
    trying: ok

experiment 2
    line:32, 34
    why: wrong calculation
    trying:

experiment 3
    line:
    why:
    trying:    
*/

let text = null;
while (!text) {
text = prompt('enter some text, it will be mirrored');
}


let mirrored = '|';
for (const character of text) {
  mirrored = character + mirrored + character;
}

alert(mirrored);
