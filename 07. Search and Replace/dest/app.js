"use strict";

var myReplace = function myReplace(_ref) {
  var text = _ref.text,
      after = _ref.after,
      before = _ref.before,
      _ref$replaceAllWords = _ref.replaceAllWords,
      replaceAllWords = _ref$replaceAllWords === void 0 ? false : _ref$replaceAllWords;
  var regexFindWhiteSpace = /[\s]+/;
  var stringArray = text.split(regexFindWhiteSpace);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = stringArray.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      var string = word[1];
      var index = word[0];

      if (string.includes(after)) {
        var regexIsFirstLetterCapitalized = /^[A-Z]/;
        var replacmentWord = before;

        if (regexIsFirstLetterCapitalized.test(string)) {
          replacmentWord = replacmentWord.split("");
          replacmentWord[0] = replacmentWord[0].toUpperCase();
          replacmentWord = replacmentWord.join("");
        }

        stringArray.splice(index, 1, replacmentWord);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var newString = stringArray.join(" ");
  return newString;
};