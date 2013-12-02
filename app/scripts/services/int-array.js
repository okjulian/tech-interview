'use strict';

angular.module('techInterviewApp')
  .service('IntArray', function IntArray() {
    this.largest = function (array) {
      return Math.max.apply(null, array);
    };
  });
