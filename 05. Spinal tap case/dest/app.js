"use strict";

var spinalCase = function spinalCase(str) {
  if (spinalCase.length === 0) {
    return null;
  } else {
    var regex = /[_\s]|(?=[A-Z])/g;
    var stringArray = str.split(regex);
    return stringArray.join("-").toLowerCase();
  }
};