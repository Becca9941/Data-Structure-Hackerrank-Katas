# TDD Data Structure Problems

On [Hackerrank](https://www.hackerrank.com), there is a [Data Structure](https://www.hackerrank.com/domains/data-structures) section which contains programming problems (katas) to solve across several data structure categories.

Hackerrank doesn't let us test-drive our solutions, so I created this project to allow me to test-drive them using Mocha and Chai, in JavaScript.

I'm solving these data structure problems because many tech interview processes require us to be able to solve algorithms related to data structures.

## Solutions
🟢 Easy | 🟠 Medium | 🔴 Hard

- [ ] ⚪ **New** [Problem]() | [Tests]() | [Code]()

### Arrays

- [x] 🟢 **Reverse an Array:** [Problem](https://www.hackerrank.com/challenges/arrays-ds/problem) | [Tests](test/reverse-array_test.js) | [Code](arrays/reverse-array.js)

- [x] 🟢 **Max Hourglass Sum (2D Array - DS on HR)** [Problem](https://www.hackerrank.com/challenges/2d-array/problem) | [Tests](test/max-hourglass-sum_test.js) | [Code](arrays/max-hourglass-sum.js)

- [ ] 🟢 **Left Rotation** [Problem](https://www.hackerrank.com/challenges/array-left-rotation) | [Tests]() | [Code]()

- [ ] 🟠 **New Year Chaos** [Problem](https://www.hackerrank.com/challenges/new-year-chaos?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays) | [Tests]() | [Code]()

- [ ] 🟠 **Minimum Swap** [Problem](https://www.hackerrank.com/challenges/minimum-swaps-2?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays) | [Tests]() | [Code]()

- [ ] 🔴 **Array Manipulation** [Problem](https://www.hackerrank.com/challenges/crush) | [Tests]() | [Code]()



## Parameterized Test Stub

Snippet for creating new test files with parameterized tests (to reduce test duplication).

- Require only the [Chai assertions](https://www.chaijs.com/guide/styles/) you need.
- Require the production code files you need.
- Describe statement format: 'Object should' or 'method should'.
- It statement format: 'do something'.
- In the 'tests' array of objects, change the input and result values to reflect the actual/expected values you're testing.


```
const expect = require('chai').expect;
const fileName = require('../filename');

describe('SomeThing should', function() {
  it('do something.', function() {

    const tests = [
      { input: true, result: true },
      { input: false, result: false }
    ];

    tests.forEach(function(test) {
      expect(Object.method(test.input)).to.eql(test.result);
    });

  });
});
```

Make sure to export the object or function you are using in your tests. In the object or function file, add the following at the end:

**Objects**

`module.exports = ObjectName;'

**Methods**

`module.exports = methodName;'

