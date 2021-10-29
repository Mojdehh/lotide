const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1Length = Object.keys(object1);
  let obj2Length = Object.keys(object2);

  if (obj1Length.length !== obj2Length.length) {
    return false;
  }

  for (let keys of obj1Length) {  // obj1Length = [a,b]   obj2Length2 = [b,a]  -> object1["a"] === 
    // Check if the key will contain the array value
    if(Array.isArray(object1[keys])){
      // Use eqArray here
      return eqArrays(object1[keys], object2[keys]);
    }
    else{
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  return true;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  else {
    let result = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      else {
        result = true;
      }
    }
    return result;
  }
}

/*// test 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab,ba), true)

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab,abc), false)*/

// tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd,dc), true)

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd,cd2), false)



//---------
// Compare the length of two objects, if they are not same then return false
// Loop through keys in the one object and compare if the value assign to it is Array or not
      //--- If it is array then use eqArray function to check the array value from object 1 and object 2 are same or not
//If the key value is not array then compare those the values with each other and return false if they does not match.

// If all the condition above does not match that means out object are same and return true.