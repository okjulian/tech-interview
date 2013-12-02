'use strict';

describe('Service: Rgb', function () {

  // load the service's module
  beforeEach(module('techInterviewApp'));

  // instantiate service
  var RGB;
  beforeEach(inject(function (_RGB_) {
    RGB = _RGB_;
  }));

  it('should convert binary rgb to hexa rgb', function () {
    expect(RGB.toHex('00000000','11111111','11111111')).toBe('00ffff');
  });

});
