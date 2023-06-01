'use strict';

// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-words', () => {
  debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let noun = readString('noun');
  let verb = readString('verb');
  let adjective = readString('adjective');

  // --- create a funny sentence ---

  let funnySentence = `On this ${adjective} day, ${noun} ${verb} out the window.`;
  /* 'One ' + newAdjective + ' time the ' + newNoun + ' can ' + newVerb; */

  // --- display the sentence ---

  displayString('funny-sentence', funnySentence);
});
