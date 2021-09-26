"use strict";

var _translator = require("./translator.js");

test("Should translate A to *-", function () {
  // 1. Arrange
  // 2. Act
  // 3. Assert
  var result = (0, _translator.enlgishToMorseCode)("A");
  var outcome = "*-";
  expect(result).toBe(outcome);
});
test("Should translate B to *----", function () {
  // 1. Arrange
  // 2. Act
  // 3. Assert
  var result = (0, _translator.enlgishToMorseCode)("B");
  var outcome = "-***";
  expect(result).toBe(outcome);
});
test("Should translate hello to **** * *-** *-** ---", function () {
  // 1. Arrange
  // 2. Act
  // 3. Assert
  var result = (0, _translator.enlgishToMorseCode)("hello");
  var outcome = "**** * *-** *-** ---";
  expect(result).toBe(outcome);
});
test("Should be able to recognise spaces", function () {
  var result = (0, _translator.enlgishToMorseCode)("cake please");
  var outcome = "-*-* *- -*- *  *--* *-** * *- *** *";
  expect(result).toBe(outcome);
});
test("Should be able to translate punctuation", function () {
  var result = (0, _translator.enlgishToMorseCode)("hello.");
  var outcome = "-*-* *- -*- *  *--* *-** * *- *** *";
  expect(result).toBe(outcome);
});