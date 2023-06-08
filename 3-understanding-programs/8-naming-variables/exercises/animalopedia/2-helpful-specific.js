'use strict';

/* specific

  _a -> animalName:
  _b -> animalNameSomething
  _c -> isSomethingName

*/


let animalName = null;
while (animalName === null) {
  animalName = prompt('enter an animal');
}

let animalNameSomething = '';

let isSomethingName = false;
while (!isSomethingName) {
  animalNameSomething = prompt('tell me something about ' + animalName);

  if (animalNameSomething === '' || animalNameSomething === null) {
    alert('that is not something');
  } else if (animalNameSomething.toLowerCase().includes(animalName.toLowerCase())) {
    isSomethingName = true;
  } else {
    alert('nope, not about ' + animalName + '.  try again.');
  }
}

alert('i just learned something cool about ' + animalName + '!\n\n- "' + animalNameSomething + '"');