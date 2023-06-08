'use strict';

import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  const islikesCats = readBoolean('likes-cats');
  const isAllergic = readBoolean('is-allergic');
  const isOwnsOne = readBoolean('owns-one');

  let result = '';

  // --- generate good advice ---

  if (islikesCats) {
    result = 'get a cat';
  }

  if (isAllergic) {
    result = 'you are doing great';
  }

  if (isOwnsOne) {
    result = 'you could be doing worse';
  }

  if (islikesCats & isAllergic) {
    result = 'make a friend who has a cat';
  }

  if (islikesCats & isOwnsOne) {
    result = 'you are doing great';
  }

  if (isAllergic & isOwnsOne) {
    result = 'rethink your life choices';
  }

  if (islikesCats & isAllergic & isOwnsOne) {
    result = 'replace your cat with a stuffed animal';
  }

  // --- display advice for the user ---

  displayString('custom-advice', result);
});
