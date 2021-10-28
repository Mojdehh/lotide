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
  for (let i = 0; i < sentence.length; i++) { //loop through array
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello all"));


/* 

Another approach with delete

const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    let arr = [];
    for (let i=0; i< sentence.length ; i++) {
      if (sentence[i] === letter) {
        arr.push(i);
      }
    }
    results[letter] = arr
  } 
  delete results[" "]
  return results;
};

console.log(letterPositions("hello all"));
// assertArraysEqual(letterPositions("hello").e, [1]);

*/