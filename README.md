# Data Structure Problems (test-driven)

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
