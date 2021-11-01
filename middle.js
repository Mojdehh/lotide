// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2) === true) {
//     console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
//   } else {
//     console.log(`🟥🟥🟥 Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
//   }
// };


const middle = function(array) {
  let middleOfArray = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    middleOfArray.push(array[(array.length - 1) / 2]);
    return middleOfArray;
  } else if (array.length % 2 === 0) {
    middleOfArray.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
    return middleOfArray;
  }

};

module.exports = middle;


// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);