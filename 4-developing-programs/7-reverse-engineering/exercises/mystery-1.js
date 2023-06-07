'use strict';

/* title palindrome

  description  enter a palindrome, this program will reverse it

  user story + acceptance criteria 
  look up the word-palindrome

  test cases

  repaper -> repaper
  civic -> civic
*/

let palindrome = null;
let isHerPoliandrome = false;

while (!isHerPoliandrome) {
  palindrome = prompt('enter a palindrome, this program will reverse it');

  if (palindrome === null) {
    alert('nope, enter something');
    continue;
  }

  if (palindrome === '') {
    alert('nope, enter something');
    continue;
  }

  let palindromeReverse = palindrome.split('').reverse().join('');

  if (palindrome != palindromeReverse) {
    alert('your input is not a palindrome, try again');
    isHerPoliandrome = false;
    continue;
  }

  if (palindrome === palindromeReverse) {
    alert('her is your revesed palindrome');
    break;
  }
}
