// import "./translator";
import {enlgishToMorseCode} from "./translator.js";

document.querySelector(".translator__form").addEventListener("submit", (event) => { event.preventDefault();

    const englishText = document.querySelector(".translator__input").value;

    const morseCode = enlgishToMorseCode(englishText);

    const outputMorseCode = document.querySelector(".translator__output");
    outputMorseCode.innerHTML = "Morese code:" + morseCode;

});