const chai = require('chai');
const expect = chai.expect;

const maxProfit = require('./index');

describe('maxProfit', function() {
  it('Returns a max profit of 17 with [45, 24, 35, 31, 40, 38, 11] ', () => {
    expect(maxProfit([45, 24, 35, 31, 40, 38, 11])).to.equal(16);
  });
  it('Returns a max profit of 14 [45, 40, 35, 31, 24, 38, 11]', () => {
    expect(maxProfit([45, 40, 35, 31, 24, 38, 11])).to.equal(14);
  });
  it('Returns a max profit of -1 [45, 40, 35, 31, 30, 19, 11]', () => {
    expect(maxProfit([45, 40, 35, 31, 30, 19, 11])).to.equal(-1);
  });
  it('hReturns a max profit of 17 [45, 24, 35, 31, 40, 24, 41]', () => {
    expect(maxProfit([45, 24, 35, 31, 40, 24, 41])).to.equal(17);
  });
});