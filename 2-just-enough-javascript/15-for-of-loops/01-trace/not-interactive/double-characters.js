// #todo

'use strict';

const animals = [
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

let doubled = '';
for (const animal of animals) {
  for (const character of animal) {
    doubled = doubled + character + character;
  }

  console.log(animal + ' -> ' + doubled);

  doubled = '';
}
