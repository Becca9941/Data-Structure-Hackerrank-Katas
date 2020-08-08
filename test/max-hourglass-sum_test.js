const expect = require('chai').expect;
const maxHourglassSum = require('../arrays/max-hourglass-sum');

describe('maxHourglassSum should', function() {
  it('sum all hourglass tops in a row', function() {

    const tests = [
      { input: [[1,1,1]], result: [3] },
      { input: [[1,1,1,0]], result: [3,2] },
      { input: [[1,1,1,0,0,0]], result: [3,2, 1, 0] },
    ];

    tests.forEach(function(test) {
      expect(maxHourglassSum(test.input)).to.eql(test.result);
    });

  });
});
