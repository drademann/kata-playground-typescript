import { asRomanNumber } from "../src/roman-numbers";

import { expect } from "chai";
import "mocha";

/*
 * Requirements
 *
 * For an integer value n the converter should return a string containing the roman number equivalent.</li>
 *
 * Roman numbers:
 *
 * I (1),
 * V (5),
 * X (10),
 * L (50),
 * C (100),
 * D (500) and
 * M (1000)
 */
describe("converting an integer to a roman number", () => {
  it("should return empty string given a 0", () => {
    expect(asRomanNumber(0)).to.be.equal("");
  });
  it("should convert directly convertable integers to simple roman numbers", () => {
    expect(asRomanNumber(1)).to.be.equal("I");
    expect(asRomanNumber(5)).to.be.equal("V");
    expect(asRomanNumber(10)).to.be.equal("X");
    expect(asRomanNumber(50)).to.be.equal("L");
    expect(asRomanNumber(100)).to.be.equal("C");
    expect(asRomanNumber(500)).to.be.equal("D");
    expect(asRomanNumber(1000)).to.be.equal("M");
  });
  it("should convert integers to combined roman numbers", () => {
    expect(asRomanNumber(2)).to.be.equal("II");
    expect(asRomanNumber(4)).to.be.equal("IV");
    expect(asRomanNumber(13)).to.be.equal("XIII");
    expect(asRomanNumber(16)).to.be.equal("XVI");
    expect(asRomanNumber(39)).to.be.equal("XXXIX");
    expect(asRomanNumber(1984)).to.be.equal("MCMLXXXIV");
    expect(asRomanNumber(2001)).to.be.equal("MMI");
  });
});
