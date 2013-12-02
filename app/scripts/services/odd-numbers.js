'use strict';

angular.module('techInterviewApp')
  .service('OddNumbers', function OddNumbers() {
    this.fromRange = function (start, end) {
      var numbers = numberRange(start, end);
      var odd = numbers.filter(isOdd);
      return odd;
    };
  });

  var numberRange = function (start, end) {
    var i = 0;
    var numbers_array = [];
    var end = end || start;
    for (i = start; i <= end; i++) {
      numbers_array.push(i);
    }
    return numbers_array;
  };

  var isOdd = function (number) {
    if (number%2 === 0) {
      return false;
    } else {
      return true;
    }
  };
