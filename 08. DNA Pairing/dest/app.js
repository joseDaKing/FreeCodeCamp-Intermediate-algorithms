"use strict";

var pairElement = function pairElement(string) {
  return string.split("").map(function (item) {
    var map = {
      T: 'A',
      A: 'T',
      G: 'C',
      C: 'G'
    };
    return item = [item, map[item]];
  });
};

console.log(pairElementV2("GCG"));