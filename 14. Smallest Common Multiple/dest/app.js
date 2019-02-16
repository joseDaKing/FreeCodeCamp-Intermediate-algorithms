"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LCM = function LCM(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b;
  });

  var _numbers = numbers,
      _numbers2 = _slicedToArray(_numbers, 2),
      min = _numbers2[0],
      max = _numbers2[1];

  var lcm = max;

  for (var i = max; i >= min; i--) {
    if (lcm % i !== 0) {
      lcm += max;
      i = max;
    }
  }

  return lcm;
};