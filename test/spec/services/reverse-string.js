'use strict';

describe('Service: ReverseString', function () {

  // load the service's module
  beforeEach(module('techInterviewApp'));

  // instantiate service
  var ReverseString;
  beforeEach(inject(function (_ReverseString_) {
    ReverseString = _ReverseString_;
  }));

  it('menem deberia ser menem', function () {
    expect(ReverseString.reverse('menem')).toBe('menem');
  });

  it('julian deberia ser nailuj', function () {
    expect(ReverseString.reverse('julian')).toBe('nailuj');
  });

  it('argentina deberia ser anitnegra', function () {
    expect(ReverseString.reverse('argentina')).toBe('anitnegra');
  });

});
