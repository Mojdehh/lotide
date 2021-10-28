const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
  } else {
    console.log(`🟥🟥🟥 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      results[letter] = [];
    }
    if (results[letter]) {
      results[letter].push(sentence.indexOf(letter));
    }
  }
  return results;
};

console.log(letterPositions("hello all"));
assertArraysEqual(letterPositions("hello").e, [1]);
