const expect = require('chai').expect;
const reverseArray = require('../arrays/reverse-array');

describe('reverseArray should', function() {
  it('flip elements so they appear in reverse order', function() {

    const tests = [
      { input: [1], result: [1] },
      { input: [1,4], result: [4,1] },
      { input: [1,4,3], result: [3,4,1] },
      { input: [1,4,3,2], result: [2,3,4,1] }
    ];

    tests.forEach(function(test) {
      expect(reverseArray(test.input)).to.eql(test.result);
    });

  });
});
