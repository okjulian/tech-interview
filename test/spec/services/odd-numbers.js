'use strict';

describe('Service: OddNumbers', function () {

  // load the service's module
  beforeEach(module('techInterviewApp'));

  // instantiate service
  var OddNumbers;
  beforeEach(inject(function (_OddNumbers_) {
    OddNumbers = _OddNumbers_;
  }));

  it('should return odd numbers from a range', function () {
    expect(OddNumbers.fromRange(1,9)).toEqual([1,3,5,7,9]);
    expect(OddNumbers.fromRange(1,3)).toEqual([1,3]);
    expect(OddNumbers.fromRange(1,1)).toEqual([1]);
    expect(OddNumbers.fromRange(1)).toEqual([1]);
    expect(OddNumbers.fromRange(0,2)).toEqual([1]);
  });

});
