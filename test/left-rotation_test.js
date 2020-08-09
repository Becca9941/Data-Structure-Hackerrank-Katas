const expect = require('chai').expect;
const leftRotation = require('../arrays/left-rotation');

describe('LeftRotation should', function() {
  it('rotate array elements 1 space to the left.', function() {

    const tests = [
      { input: [1,2], result: [2,1] },
      { input: [1,2,3], result: [2,3,1] },
      { input: [1,2,3,4], result: [2,3,4,1] },
      { input: [1,2,3,4,5], result: [2,3,4,5,1] },
    ];

    tests.forEach(function(test) {
      expect(leftRotation(test.input,1)).to.eql(test.result);
    });

  });

  it('rotate array elements 2 spaces to the left.', function() {

    const tests = [
      { input: [1,2], result: [1,2] },
    ];

    tests.forEach(function(test) {
      expect(leftRotation(test.input,2)).to.eql(test.result);

    });
  });
});
