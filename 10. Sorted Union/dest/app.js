"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

Array.prototype.removeDuplicates = function () {
  return _toConsumableArray(new Set(this));
};

var uniteUnique = function uniteUnique() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  return arrays.reduce(function (acc, array) {
    if (!Array.isArray(acc)) {
      var temp = acc;
      acc = [temp];
    }

    if (!Array.isArray(array)) acc.push(array);else acc = acc.concat(array);
    return acc;
  }).removeDuplicates();
};