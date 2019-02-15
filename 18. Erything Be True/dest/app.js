"use strict";

var truthCheck = function truthCheck(colllection, pre) {
  return colllection.every(function (item) {
    return item[pre];
  });
};