const words = ["ground", "control", "to", "major", "tom"];
const names = ["Mojdeh", "Farhood"];
const ages = [33, 26];

const map = function(array, callBk) {
  let results = [];
  for (let item of array) {
    results.push(callBk(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
const nameCount = map(names, name => name.length);
const yearOfBirth = map(ages, age => 2021 - age);

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
};

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(nameCount, [ 6, 7 ]);
assertArraysEqual(yearOfBirth, [1988, 1995]);