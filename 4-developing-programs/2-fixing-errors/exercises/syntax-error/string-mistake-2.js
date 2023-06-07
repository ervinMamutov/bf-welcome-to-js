// #todo

'use strict';

/*
  environment: chrome

  name: SyntaxError
  message:  Unexpected identifier 'anchorName'

  callstack: 22

  life cycle: exeption

  the mistake: wrong assignment

  the fix(es): add + 
*/

const anchorName = '#Home';

const innerHtml = '<p>Click here to <a href=' + anchorName + '>go home</a></p>';
