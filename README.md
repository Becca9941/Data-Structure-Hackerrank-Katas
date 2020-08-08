# Data Structure Problems (test-driven)

```
const expect = require('chai').expect;
const reverseArray = require('../filename.js');

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
