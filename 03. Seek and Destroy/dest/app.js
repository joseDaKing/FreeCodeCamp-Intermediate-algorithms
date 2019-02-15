"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var rmElmOfArr = function rmElmOfArr(arr) {
  for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }

  if (arr.length < 1) {
    return null;
  } else {
    var modifiedArr = _toConsumableArray(arr).filter(function (elem) {
      var bool = true;

      for (var i = 0; i < items.length; i++) {
        if (elem === items[i]) {
          bool = false;
        }
      }

      return bool;
    });

    return modifiedArr;
  }
};