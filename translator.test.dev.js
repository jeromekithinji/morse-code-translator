"use strict";

var _translator = require("./translator.js");

test("Should return *-", function () {
  // 1. Arrange
  // 2. Act
  // 3. Assert
  var result = (0, _translator.enlgishToMorseCode)("A");
  var outcome = "*-";
  expect(result).toBe(outcome);
});
test("Should return *----", function () {
  // 1. Arrange
  // 2. Act
  // 3. Assert
  var result = (0, _translator.enlgishToMorseCode)("B");
  var outcome = "-***";
  expect(result).toBe(outcome);
});
test("Should return **** * *-** *-** ---", function () {
  // 1. Arrange
  // 2. Act
  // 3. Assert
  var result = (0, _translator.enlgishToMorseCode)("hello");
  var outcome = "**** * *-** *-** ---";
  expect(result).toBe(outcome);
});