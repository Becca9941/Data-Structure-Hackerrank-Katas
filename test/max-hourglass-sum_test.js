const expect = require('chai').expect;
const maxHourglassSum = require('../arrays/max-hourglass-sum');

describe('maxHourglassSum should', function() {
  it('do something.', function() {

    const tests = [
      { input: true, result: true },
    ];

    tests.forEach(function(test) {
      expect(maxHourglassSum(test.input)).to.eql(test.result);
    });

  });
});
