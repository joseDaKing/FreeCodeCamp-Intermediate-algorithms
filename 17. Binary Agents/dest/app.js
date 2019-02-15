"use strict";

var binaryToDecimal = function binaryToDecimal(string) {
  var binaryArray = string.split("").reverse();
  var number = binaryArray.map(function (digit, index) {
    return parseInt(digit) * Math.pow(2, index);
  }).reduce(function (acc, number) {
    return acc + number;
  });
  return number;
};

var binaryAngent = function binaryAngent(binaryString) {
  var binaryArray = binaryString.split(" ");
  return binaryArray.map(function (item) {
    return String.fromCharCode(binaryToDecimal(item));
  }).join("");
};