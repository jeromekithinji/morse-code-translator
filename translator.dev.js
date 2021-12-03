"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enlgishToMorseCode = void 0;
// console.log("works");
var directory = [["A", "*-"], ["B", "-***"], ["C", "-*-*"], ["D", "-**"], ["E", "*"], ["F", "**-*"], ["G", "--*"], ["H", "****"], ["I", "**"], ["J", "*---"], ["K", "-*-"], ["L", "*-**"], ["M", "--"], ["N", "-*"], ["O", "---"], ["P", "*--*"], ["Q", "--*-"], ["R", "*-*"], ["S", "***"], ["T", "-"], ["U", "**-"], ["V", "***-"], ["W", "*--"], ["X", "-**-"], ["Y", "-*--"], ["Z", "--**"]]; // const translate = (character)  => {
//     let translation = "";
//     for (let i = 0; i < directory.length; i++) {
//         if (character.toUpperCase() === directory[i][0]) {
//             translation += directory[i][1];
//         }
//         console.log(translation);
//     }
//     return translation;
// }
// export const enlgishToMorseCode = (englishText) => {
//     return englishText.split("").map((character) => {
//         translate(character);
//     }).join(" ");
// }

var enlgishToMorseCode = function enlgishToMorseCode(englishText) {
  return englishText.split("").map(function (character) {
    var translation = "";

    for (var i = 0; i < directory.length; i++) {
      if (character.toUpperCase() === directory[i][0]) {
        translation += directory[i][1];
      }
    }

    return translation;
  }).join(" ");
}; // , ["1", ""], ["2", ""], ["3", ""], ["4", ""], ["5", ""], ["6", ""], ["7", ""], ["8", ""], ["9", ""], ["0", ""], [".", ""], [",", ""], [":", ""], ["?", ""], ["-", ""]


exports.enlgishToMorseCode = enlgishToMorseCode;