"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

Array.prototype.removeDuplicate = function () {
  return _toConsumableArray(new Set(this));
};

var sumPrimes = function sumPrimes(n) {
  var numbers = [];

  for (var i = 2; i <= n; i++) {
    numbers.push(i);
  }

  var notPrimeNumbers = [];

  for (var _i = 0; _i < numbers.length; _i++) {
    var number = numbers[_i];

    for (var _i3 = number; _i3 <= n; _i3 += number) {
      if (number < _i3) {
        notPrimeNumbers.push(_i3);
      }
    }
  }

  notPrimeNumbers = notPrimeNumbers.removeDuplicate();
  var primeNumbers = [];

  for (var _i2 = 0; _i2 < numbers.length; _i2++) {
    var _number = numbers[_i2];

    if (!notPrimeNumbers.includes(_number)) {
      primeNumbers.push(_number);
    }
  }

  return primeNumbers.reduce(function (acc, item) {
    return acc + item;
  });
};