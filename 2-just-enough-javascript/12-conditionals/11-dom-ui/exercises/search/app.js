import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  const text = readString('text');
  const query = readString('query');
  const sensitive = readBoolean('sensitive');
  let result;

  // --- do the search ---

  if (sensitive) {
    if (text.includes(query)) {  
      result = 'yes';
    } else {
      result = 'no';
    }
  } else {
    if (text.toLowerCase().includes(query.toLowerCase())) {
      result = 'yes';
    } else {
      result = 'no';
    }
  }

  // --- display the search results ---

  displayString('search-result', result);
});
