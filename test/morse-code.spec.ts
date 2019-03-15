import { charToMorseCode, morseCodeToChar } from "../src/morse-code-list";

import { expect } from "chai";
import "mocha";

/*
 * Requirements
 *
 *
 */

/*
 * Morse code converter tests.
 */
describe("converting characters to morse code and back", () => {
  it("should convert 'A' to '.-'", () => {
    expect(charToMorseCode("A")).to.be.equal(".-");
  });
  it("should throw EvalError given unknown character", () => {
    expect(() => charToMorseCode("")).to.throw(EvalError);
  });
  it("should convert '.-' to 'A'", () => {
    expect(morseCodeToChar(".-")).to.be.equal("A");
  });
  it("should throw EvalError given unknown morse code", () => {
    expect(() => morseCodeToChar("abc")).to.throw(EvalError);
  });
});
