"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var Person = function Person(fullName) {
  var name = fullName.split(" ");

  this.getFirstName = function () {
    return name[0];
  };

  this.getLastName = function () {
    return name[1];
  };

  this.getFullName = function () {
    return name.join(" ");
  };

  this.setFirstName = function (chooseName) {
    name[0] = chooseName;
  };

  this.setLastName = function (chooseName) {
    name[1] = chooseName;
  };

  this.setFUllName = function (chooseName) {
    name = (_readOnlyError("name"), chooseName.split(" "));
  };
};