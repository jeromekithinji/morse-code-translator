import {enlgishToMorseCode} from "./translator.js";

test("Should translate A to *-", () => {
    // 1. Arrange
    // 2. Act
    // 3. Assert
    const result = enlgishToMorseCode("A")
    const outcome = "*-";
    expect(result).toBe(outcome);
});


test("Should translate B to *----", () => {
    // 1. Arrange
    // 2. Act
    // 3. Assert
    const result = enlgishToMorseCode("B")
    const outcome = "-***";
    expect(result).toBe(outcome);
});


test("Should translate hello to **** * *-** *-** ---", () => {
    // 1. Arrange
    // 2. Act
    // 3. Assert
    const result = enlgishToMorseCode("hello")
    const outcome = "**** * *-** *-** ---";
    expect(result).toBe(outcome);
});

test("Should be able to recognise spaces", () => {
    const result = enlgishToMorseCode("cake please");
    const outcome = "-*-* *- -*- *  *--* *-** * *- *** *";
    expect(result).toBe(outcome);
});

test("Should be able to translate punctuation", () => {
    const result = enlgishToMorseCode("hello.");
    const outcome = "-*-* *- -*- *  *--* *-** * *- *** *";
    expect(result).toBe(outcome);
});



