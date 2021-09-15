import "./translator";
import {enlgishToMorseCode} from "./translator";

document.querySelector(".translator__form").addEventListener("submit", (event) => { event.preventDefault();

    const englishText = document.querySelector(".translator__input").value;

    const morseCode = enlgishToMorseCode(englishText);

    const outputMorseCode = document.querySelector(".translator__output");
    outputMorseCode.innerHTML = morseCode;

});