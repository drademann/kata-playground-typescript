import { expect } from "chai";
import "mocha";

import { stringCalculate } from "../src/string-calculator";

/*
 * Requirements
 *
 * Providing an empty string when calculating
 * then the result is 0.
 *
 * Providing a single number when calculating
 * then the result is the number as integer.
 *
 * Providing two comma separated numbers when calculating
 * then the result is the sum of the numbers.
 *
 * Providing an unknown amount of comma separated numbers when calculating
 * then the result is the sum of all numbers.
 *
 * Providing an input string contains a line break instead of comma as delimiter when calculating
 * then the result is the sum of all numbers.
 *
 * Providing a delimiter is optionally defined on the first line like //; when calculating
 * then the result is the sum of all numbers. (e.g. //;\n1;2 should return 3)
 *
 * Providing a negative number when calculating
 * then throws an exception "negatives not allowed" - and the negative(s) that was passed.
 *
 * Providing numbers greater than 1000 when calculating
 * then such numbers should be ignored in the calculation.
 *
 * ...
 *
 * Use the following advanced requirements if you finish the previous steps in less than 30 minutes.
 *
 * Providing delimiters of any length ("//[delimiter]\n") when calculating
 * then the result is the sum of the numbers. (e.g. "//[xx]\n1xx2xx3" should return 6)
 *
 * Providing multiple delimiters ("//[delim1][delim2]\n") when calculating
 * then the result is the sum of the numbers. (e.g. "//[x][y]\n1x2y3" should return 6)
 *
 * Providing multiple delimiters with variable length when calculating
 * then the result is the sum of the numbers.
 */
// use .only to instruct Wallaby to execute this suite only
describe(/*.only*/ "calculating the sum of numbers contained in a string", () => {
  it("should return 0 given an empty string", () => {
    expect(stringCalculate("")).to.be.equal(0);
  });
  it("should return the single number contained in a string", () => {
    expect(stringCalculate("1")).to.be.equal(1);
  });
  it("should return the sum of two comma separated numbers contained in a string", () => {
    expect(stringCalculate("1,2")).to.be.equal(3);
  });
  it("should return the sum of many comma separated numbers contained in a string", () => {
    expect(stringCalculate("1,2,3,4,1000,1")).to.be.equal(1011);
  });
  it("should accept line delimiter as separator", () => {
    expect(stringCalculate("1,2\n3")).to.be.equal(6);
  });
  it("should allow to define an additional custom delimiter", () => {
    expect(stringCalculate("//;\n1;2")).to.be.equal(3);
  });
  it("should throw error given a negative number", () => {
    expect(() => stringCalculate("1,-2,3")).to.throw(EvalError);
  });
  it("should ignore numbers greater than 1000", () => {
    expect(stringCalculate("1,1000,1001,2")).to.be.equal(1003);
  });
});
