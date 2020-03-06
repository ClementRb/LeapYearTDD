import { LeapYear } from "./index";
import { expect } from "chai";
import "mocha";

describe("Leap Year tests", function() {
  it("should return true if divisible by 400", function() {
    expect(LeapYear(800)).to.equal(true);
  });
  it("should return true if divisible by 4", function() {
    expect(LeapYear(800)).to.equal(true);
  });
});
