import { decode } from "../src/morse-code";
import { charToMorseCode, morseCodeToChar } from "../src/morse-code-list";

import { expect } from "chai";
import "mocha";

/*
 * Requirements
 *
 * Provide a function given a morse code string to return the readable text.
 *
 * Example:
 *      decode(".... . .-.. .-.. ---   .-- --- .-. .-.. _..")
 *
 * Should return "HELLO WORLD". One space separates characters, three spaces separate words.
 * You may use the provided functions charToMorseCode and morseCodeToChar or the MorseCodes array directly
 * to convert as needed.
 *
 * Optional requirements e.g. to recognize punctation or to parse an incoming stream of morse codes.
 */

describe("decoding a morse code", () => {
  it("should convert a single morse code", () => {
    expect(decode("....")).to.be.equal("H");
    expect(decode(".")).to.be.equal("E");
    expect(decode(".-..")).to.be.equal("L");
    expect(decode(".-..")).to.be.equal("L");
    expect(decode("---")).to.be.equal("O");
  });
  it("should convert multiple morse codes separated by a space", () => {
    expect(decode(".... . .-.. .-.. ---")).to.be.equal("HELLO");
    expect(decode(".-- --- .-. .-.. _..")).to.be.equal("WORLD");
  });
  it("should convert morse code words separated by three spaces", () => {
    expect(decode(".... . .-.. .-.. ---   .-- --- .-. .-.. _..")).to.be.equal(
      "HELLO WORLD"
    );
  });
});

/*
 * Tests for morse code converter helper functions.
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
