import { expect } from 'chai';

//Sample JUnit test
function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

describe('#sum()', function () {

  //  if needed logic before each test run
  beforeEach(function () {

  });

  // test a functionality
  it('should add numbers', function () {
    expect(sum([1, 2, 3, 4, 5])).to.equal(15);
  });

  it('should return 0 for an empty array', function () {
    expect(sum([])).to.equal(0);
  });

  it('should correctly add negative numbers', function () {
    expect(sum([-1, -2, -3])).to.equal(-6);
    expect(sum([-5, 5])).to.equal(0);
  });

  it('should correctly add decimal numbers', function () {
    expect(sum([1.5, 2.7, 3.2])).to.be.closeTo(7.4, 0.0001);
  });

  it('should add mixed positive and negative numbers', function () {
    expect(sum([-2, 4, -1, 3])).to.equal(4);
  });
});