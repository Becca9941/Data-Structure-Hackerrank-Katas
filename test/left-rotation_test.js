const expect = require('chai').expect;
const leftRotation = require('../arrays/left-rotation');

describe('LeftRotation should', function() {
  it('rotate array elements 1 space to the left.', function() {

    const tests = [
      { input: [1,2], result: [2,1] },
      { input: [1,2,3], result: [2,3,1] },
    ];

    tests.forEach(function(test) {
      expect(leftRotation(test.input)).to.eql(test.result);
    });

  });
});
