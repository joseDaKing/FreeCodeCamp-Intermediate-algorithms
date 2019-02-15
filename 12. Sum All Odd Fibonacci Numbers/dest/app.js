"use strict";

var isOdd = function isOdd(num) {
  return !(num % 2 === 0);
};

var sumFibs = function sumFibs(n) {
  var next = 1,
      current = 0,
      temp,
      oddSum = 0;

  while (next <= n) {
    temp = next;
    next += current;
    current = temp;
    if (isOdd(current)) oddSum += current;
  }

  return oddSum;
};