import { asRomanNumber } from "./roman-numbers";

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
  it("should covert 1 to I", () => {
    expect(asRomanNumber(1)).to.be.equal("I");
  });
});
