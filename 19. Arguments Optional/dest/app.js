"use strict";

var addTogether = function addTogether() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  if (typeof numbers[0] === "number" && typeof numbers[1] === "number") {
    return numbers[0] + numbers[1];
  } else if (typeof numbers[0] === "number" && !numbers[1]) {
    return function (number2) {
      if (typeof number2 === "number") return numbers[0] + number2;else return null;
    };
  } else {
    return null;
  }
};