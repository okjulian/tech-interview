'use strict';

describe('Service: Fibonacci', function () {

  // load the service's module
  beforeEach(module('techInterviewApp'));

  // instantiate service
  var Fibonacci;
  beforeEach(inject(function (_Fibonacci_) {
    Fibonacci = _Fibonacci_;
  }));

  it('f(0) es 0', function () {
    expect(Fibonacci.n(0)).toBe(0);
  });

  it('f(1) es 1', function () {
    expect(Fibonacci.n(1)).toBe(1);
  });

  it('f(2) es 1', function () {
    expect(Fibonacci.n(2)).toBe(1);
  });

  it('f(3) es 2', function () {
    expect(Fibonacci.n(3)).toBe(2);
  });

  it('f(7) es 13', function () {
    expect(Fibonacci.n(7)).toBe(13);
  });

});
