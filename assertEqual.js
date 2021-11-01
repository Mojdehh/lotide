const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertio Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🟥🟥🟥Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Mojdeh", "Mojdeh");
// assertEqual(1, 12);

module.exports = assertEqual;