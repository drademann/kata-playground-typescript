import { fizzBuzz } from "../src/fizz-buzz";

import { expect } from "chai";
import "mocha";

/*
 * Requirements
 *
 * Given a list of numbers it
 *
 * - should return "Fizz" if a number is divisible by 3</li>
 * - should return "Buzz" if a number is divisible by 5</li>
 * - the number in all other cases.</li>
 */
describe("providing Fizz and Buzz", () => {
  it("should return empty list given an empty list of numbers", () => {
    expect(fizzBuzz()).to.be.empty;
  });
  it("should return the number given no 3 or 5", () => {
    expect(fizzBuzz(1)).to.have.same.ordered.members(["1"]);
  });
  it("should return the numbers in same order as given", () => {
    expect(fizzBuzz(1, 2, 4, 7)).to.have.same.ordered.members([
      "1",
      "2",
      "4",
      "7"
    ]);
  });
  it("should return 'Fizz' given a 3", () => {
    expect(fizzBuzz(3)).to.have.same.ordered.members(["Fizz"]);
  });
  it("should return 'Buzz' given a 5", () => {
    expect(fizzBuzz(5)).to.have.same.ordered.members(["Buzz"]);
  });
  it("should return 'Fizz' given a number divisible by 3", () => {
    expect(fizzBuzz(6)).to.have.same.ordered.members(["Fizz"]);
  });
  it("should return 'Buzz' given a number divisible by 5", () => {
    expect(fizzBuzz(5, 10)).to.have.same.ordered.members(["Buzz", "Buzz"]);
  });
  it("should accept a mix of numbers", () => {
    expect(fizzBuzz(2, 3, 5, 9, 10, 11, 12)).to.have.same.ordered.members([
      "2",
      "Fizz",
      "Buzz",
      "Fizz",
      "Buzz",
      "11",
      "Fizz"
    ]);
  });
});
