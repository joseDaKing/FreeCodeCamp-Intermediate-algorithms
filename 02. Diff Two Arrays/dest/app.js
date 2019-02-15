"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var diffArr = function diffArr(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return null;
  } else if (arr1.length === 0) {
    return _toConsumableArray(arr2);
  } else if (arr2.length === 0) {
    return _toConsumableArray(arr1);
  } else {
    var bigArr;
    var smallArr;
    var _diffArr = [];

    if (arr1.length < arr2.length) {
      bigArr = _toConsumableArray(arr1);
      smallArr = _toConsumableArray(arr2);
    } else {
      bigArr = _toConsumableArray(arr2);
      smallArr = _toConsumableArray(arr1);
    }

    for (var i = 0; i < smallArr.length; i++) {
      if (!bigArr.includes(smallArr[i])) {
        _diffArr.push(_toConsumableArray(smallArr)[i]);
      }
    }

    for (var _i = 0; _i < bigArr.length; _i++) {
      if (!smallArr.includes(bigArr[_i])) {
        _diffArr.push(_toConsumableArray(bigArr)[_i]);
      }
    }

    console.log(_diffArr);
  }
};