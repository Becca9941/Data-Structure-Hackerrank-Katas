const expect = require('chai').expect;
const maxHourglassSum = require('../arrays/max-hourglass-sum');

describe('maxHourglassSum should', function() {
  it('find max hourglass sum', function() {

    const tests = [
      { input: [[1,1,1],
	        [0,1,0],
	        [1,1,1]],result: 7 },

      { input: [[1,1,0],
	        [1,0,0],
	        [1,1,0]], result: 4 },

      { input: [[0,2,4,4],
	        [0,0,2,0],
	        [0,1,2,4]], result: 19 },

      { input: [[1,1,1,0,0,0],
	        [0,1,0,0,0,0],
	        [1,1,1,0,0,0],
	        [0,0,2,4,4,0],
	        [0,0,0,2,0,0],
	        [0,0,1,2,4,0]], result: 19 }
    ];

    tests.forEach(function(test) {
      expect(maxHourglassSum(test.input)).to.eql(test.result);
    });

  });
});
