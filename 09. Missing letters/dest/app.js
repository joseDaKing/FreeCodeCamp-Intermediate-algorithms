"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fearNotLetter = function fearNotLetter(string) {
  var stringArray = string.toLowerCase().split("");
  var missingLetters = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = stringArray.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          currentLetter = _step$value[1];

      var nextLetter = stringArray[index + 1];

      if (nextLetter) {
        var currentCharCode = currentLetter.charCodeAt(0);
        var nextCharCode = nextLetter.charCodeAt(0);

        if (1 < nextCharCode - currentCharCode) {
          var tempString = "";

          for (var i = currentCharCode + 1; i < nextCharCode; i++) {
            tempString += String.fromCharCode(i);
          }

          missingLetters.push(tempString);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (missingLetters.length === 1) {
    return missingLetters[0];
  } else if (missingLetters.length === 0) return null;else return missingLetters;
};