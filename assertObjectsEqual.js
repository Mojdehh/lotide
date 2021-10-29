const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (let key1 in obj1) {
    if (key1 in obj2) {
      if (Array.isArray(obj1[key1]) && Array.isArray(obj2[key1])) {
        return eqArrays(obj1[key1], obj2[key1]);
      } else if (obj1[key1] !== obj2[key1]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🟥 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4]};
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(dc, cd2);