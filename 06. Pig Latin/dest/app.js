"use strict";

var pigLatin = function pigLatin(string) {
  if (string.length <= 1) {
    return null;
  } else {
    var isFirstLetterVowel = /^[aouie]/i.test(string);

    var _pigLatin;

    if (isFirstLetterVowel) {
      _pigLatin = string + "way";
    } else {
      var stringArray = string.split("");
      var firstLetter = stringArray.shift();
      _pigLatin = stringArray.join("") + firstLetter + "ay";
    }

    return _pigLatin;
  }
};