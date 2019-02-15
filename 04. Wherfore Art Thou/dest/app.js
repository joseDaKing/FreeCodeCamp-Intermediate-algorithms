"use strict";

var whatIsInAName = function whatIsInAName(collection, source) {
  if (!(collection.length || source)) {
    return null;
  } else {
    return collection.filter(function (elem) {
      var bool = true;

      for (var key in source) {
        bool = elem[key] === source[key] && bool;
      }

      return bool;
    });
  }
};

whatIsInAName([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
});