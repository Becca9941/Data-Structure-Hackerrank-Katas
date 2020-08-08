const expect = require('chai').expect;
const reverseArray = require('../arrays/reverse-array');

describe('reverseArray should', function() {
  it('flip elements so they appear in reverse order', function() {
    // 1432
    expect(reverseArray([1])).to.equal(1);
  });
});
