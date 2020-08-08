const expect = require('chai').expect;
const maxHourglassSum = require('../arrays/max-hourglass-sum');

describe('maxHourglassSum should', function() {
  it('find sum of largest hourglass.', function() {

    const tests = [
      { input: [[1,1,1]], result: 3 },
      { input: [[0,1,0]], result: 1 },
    ];

    tests.forEach(function(test) {
      expect(maxHourglassSum(test.input)).to.eql(test.result);
    });

  });
});
