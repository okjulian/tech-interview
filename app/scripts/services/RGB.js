'use strict';

angular.module('techInterviewApp')
  .service('RGB', function Rgb() {
    this.toHex = function (red, green, blue) {
      var red_int = parseInt(red, 2);
      var green_int = parseInt(green, 2);
      var blue_int = parseInt(blue, 2);
      var hexa_red = decimalToHexa(red_int);
      var hexa_green = decimalToHexa(green_int);
      var hexa_blue = decimalToHexa(blue_int);
      hexa_red = zeroFill(hexa_red);
      hexa_green = zeroFill(hexa_green);
      hexa_blue = zeroFill(hexa_blue);
      return hexa_red + hexa_green + hexa_blue;
    };
  });

  var decimalToHexa = function (number) {
    var decimal = number.toString(16);
    return decimal;
  };

  var zeroFill = function (number_string) {
    if (number_string.length === 1) {
      return '0' + number_string;
    } else {
      return number_string;
    }
  };
