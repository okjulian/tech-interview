'use strict';

describe('Service: IntArray', function () {

  // load the service's module
  beforeEach(module('techInterviewApp'));

  // instantiate service
  var IntArray;
  beforeEach(inject(function (_IntArray_) {
    IntArray = _IntArray_;
  }));

  it('should do something', function () {
    expect(IntArray.largest([1,2,3,4,5])).toBe(5);
    expect(IntArray.largest([1,2,99,4,5])).toBe(99);
    expect(IntArray.largest([1])).toBe(1);
  });

});
