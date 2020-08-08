const expect = require('chai').expect;
const reverseArray = require('../arrays/reverse-array');

describe('reverseArray should', function() {
  it('flip elements so they appear in reverse order', function() {
    expect(reverseArray([1])).to.eql([1]);
    expect(reverseArray([1,4])).to.eql([4,1]);
    expect(reverseArray([1,4,3])).to.eql([3,4,1]);
    expect(reverseArray([1,4,3,2])).to.eql([2,3,4,1]);
  });
});
