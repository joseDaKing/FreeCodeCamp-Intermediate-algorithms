"use strict";

var orbitalPeriod = function orbitalPeriod() {
  var orbitalPeriodCalc = function orbitalPeriodCalc(avgAlt) {
    var r = 6367.4447 + avgAlt;
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow(r, 3) / 398600.4418) / 100) * 100;
  };

  for (var _len = arguments.length, array = new Array(_len), _key = 0; _key < _len; _key++) {
    array[_key] = arguments[_key];
  }

  return array.map(function (item) {
    var name = item.name,
        avgAlt = item.avgAlt;
    return {
      name: name,
      orbitalPeriod: orbitalPeriodCalc(avgAlt)
    };
  });
};

console.log(orbitalPeriod({
  name: "sputnik",
  avgAlt: 35873.5553
}));