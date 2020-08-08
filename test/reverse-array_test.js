const expect = require('chai').expect;
const reverseArray = require('../arrays/reverse-array');

describe('reverseArray should', function() {
  it('flip elements so they appear in reverse order', function() {
    // 1432
    expect(reverseArray([1])).to.eql([1]);
    //expect(reverseArray([1,4])).to.equal([4,1]);
  });
});
