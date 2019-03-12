import { primeFactors } from "../src/prime-factors";

import { expect } from "chai";
import "mocha";

/*
 * Requirements
 *
 * For an integer value n the generator should return all prime factors as an ordered list.
 */
describe("calculating primefactors of a natural number", () => {
  it("should return an empty array given number 1", () => {
    expect(primeFactors(1)).to.be.empty;
  });
  it("should return [2] given number 2", () => {
    expect(primeFactors(2)).to.deep.equal([2]);
  });
  it("should return [3] given number 3", () => {
    expect(primeFactors(3)).to.deep.equal([3]);
  });
  it("should return [2, 2} given number 4", () => {
    expect(primeFactors(4)).to.deep.equal([2, 2]);
  });
  it("should return [2, 3] given number 6", () => {
    expect(primeFactors(6)).to.deep.equal([2, 3]);
  });
  it("should return [2, 2, 2] given number 8", () => {
    expect(primeFactors(8)).to.deep.equal([2, 2, 2]);
  });
  it("should return [3, 3] given number 9", () => {
    expect(primeFactors(9)).to.deep.equal([3, 3]);
  });
});
