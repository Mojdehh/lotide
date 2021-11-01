// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertio Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};

module.exports = head;

// assertEqual(head([]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");