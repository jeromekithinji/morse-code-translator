"use strict";

var _translator = require("./translator.js");

// import "./translator";
document.querySelector(".translator__form").addEventListener("submit", function (event) {
  event.preventDefault();
  var englishText = document.querySelector(".translator__input").value;
  var morseCode = (0, _translator.enlgishToMorseCode)(englishText);
  var outputMorseCode = document.querySelector(".translator__output");
  outputMorseCode.innerHTML = "Morse code: " + morseCode;
});