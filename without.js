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

const without = function (source, itemsToRemove) {
  const modifiedSource = source;
  for (let i = 0; i < modifiedSource.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (modifiedSource[i] === itemsToRemove[j]) {
        modifiedSource.splice(i, 1);
      }
    }
  }
  return modifiedSource;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
