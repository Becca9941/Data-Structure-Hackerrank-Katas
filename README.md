# TDD Data Structure Problems

On [Hackerrank](https://www.hackerrank.com), there is a [Data Structure](https://www.hackerrank.com/domains/data-structures) section which contains programming problems (katas) to solve across several data structure categories.

Hackerrank doesn't let us test-drive our solutions, so I created this project to allow me to test-drive them using Mocha and Chai, in JavaScript.

I'm solving these data structure problems because many tech interview processes require us to be able to solve algorithms related to data structures.

## Problems Solved

### Arrays

#### Reverse an Array
[Problem Statement](https://www.hackerrank.com/challenges/arrays-ds/problem) | [Test File](test/reverse-array_test.js) | [Production File](arrays/reverse-array.js)


## Parameterized Test Stub

Whenever you create a new test file, use this test stub to quickly write new parameterized tests.

- Require only the [Chai assertions](https://www.chaijs.com/guide/styles/) you need.
- Require the production code files you need.
- Describe statement format: 'Object should' or 'method should'.
- It statement format: 'do something'.
- In the 'tests' array of objects, change the input and result values to reflect the actual/expected values you're testing.


```
const expect = require('chai').expect;
const fileName = require('../filename.js');

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
