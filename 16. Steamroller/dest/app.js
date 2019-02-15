"use strict";

Array.prototype.flatten = function () {
  var increment = 0;
  var flattenArray = [];

  (function flatten(array) {
    increment++ - 1;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var isArray = Array.isArray(item);

        if (isArray) {
          flatten(item);
        } else {
          flattenArray.push(item);
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
  })(this);

  return flattenArray;
};