import { exportAllDeclaration } from "@babel/types";
import { TestResult } from "@jest/types";

import {enlgishToMorseCode} from "./translator.js";

test("Should return *-", () => {
    // 1. Arrange
    // 2. Act
    // 3. Assert
    const result = enlgishToMorseCode("A")
    const outcome = "*-";
    expect(result).toBe(outcome);
});


test("Should return *----", () => {
    // 1. Arrange
    // 2. Act
    // 3. Assert
    const result = enlgishToMorseCode("B")
    const outcome = "-***";
    expect(result).toBe(outcome);
});


test("Should return **** * *-** *-** ---", () => {
    // 1. Arrange
    // 2. Act
    // 3. Assert
    const result = enlgishToMorseCode("hello")
    // const outcome = ".... . .-.. .-.. ---";
    const outcome = "**** * *-** *-** ---";
    expect(result).toBe(outcome);
});


