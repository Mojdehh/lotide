const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertio Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
  }
};


// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) return false;
  for (let key1 in obj1) {
    if (key1 in obj2 && obj1[key1] === obj2[key1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const ca = { c: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const bc = {b: "2", c: "1"};
eqObjects(ab, bc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, bc), false);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, ca), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);