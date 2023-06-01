// #todo

'use strict';

let animals = [
  'dog',
  'cat',
  'horse',
  'fish',
  'whale',
  'elephant',
  'snake',
  'dove',
];

// let animal = 'cat';
// let animal = 'horse';
// let animal = 'fish';
// let animal = 'whale';
// let animal = 'elephant';
// let animal = 'snake';
// let animal = 'dove';

let interimResult = '';
for (const animal of animals) {
  for (let character of animal) {
    interimResult = character + interimResult;
  }
  console.log(`${animal} ----> ${interimResult}`);
  interimResult = '';
  /* console.log(letter); */
}
