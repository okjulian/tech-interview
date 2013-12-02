'use strict';

angular.module('techInterviewApp')
  .service('Fibonacci', function Fibonacci() {
    var fibonacci = this;
    this.n = function (number) {
      if (number === 0 || number === 1) {
        return number;
      } else {
        return fibonacci.n(number -1) + fibonacci.n(number - 2);
      }
    };
  });
