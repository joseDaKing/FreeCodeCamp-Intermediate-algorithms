"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var sumAllreduce = function sumAllreduce(arr) {
  if (arr.length < 2) {
    return null;
  } else {
    var sum = 0;

    var sortedArr = _toConsumableArray(arr).sort(function (a, b) {
      return a > b;
    });

    for (var i = sortedArr[0]; i <= sortedArr[1]; i++) {
      sum += i;
    }

    return sum;
  }
};

var sumAllforLoop = function sumAllforLoop(arr) {
  if (arr.length < 2) {
    return null;
  } else {
    var sum = 0;

    var sortedArr = _toConsumableArray(arr).sort(function (a, b) {
      return a > b;
    });

    var allNumArr = [];

    for (var i = sortedArr[0]; i <= sortedArr[1]; i++) {
      allNumArr.push(i);
    }

    sum = allNumArr.reduce(function (acc, num) {
      return acc + num;
    });
    console.log(sum);
  }
};