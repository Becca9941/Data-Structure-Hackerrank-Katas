const expect = require('chai').expect;
const maxHourglassSum = require('../arrays/max-hourglass-sum');

describe('maxHourglassSum should', function() {
  it('find sum of one hourglass', function() {

    const tests = [
      { input: [[1,1,1],[0,1,0],[1,1,1]], result: 7},
      { input: [[1,1,0],[1,0,0],[1,1,0]], result: 5},
    ];

    tests.forEach(function(test) {
      expect(maxHourglassSum(test.input)).to.eql(test.result);
    });

  });
});
