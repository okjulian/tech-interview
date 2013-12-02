'use strict';

angular.module('techInterviewApp')
  .service('ReverseString', function ReverseString() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.reverse = function (string) {
      return string.split('', string.length).reverse().join('');
    };
  });
