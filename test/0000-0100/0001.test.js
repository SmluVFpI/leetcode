"use strict";
const expect = require("chai").expect;
const twoSum = require("../../dist/0001.js").twoSum;

describe("0000-0100/0001.js function test", () => {
  it("should return [0, 1]", () => {
    const result = twoSum([2, 7, 11, 15], 9);
    expect(result[0]).to.equal(0);
    expect(result[1]).to.equal(1);
  });
  it("should return [0, 3]", () => {
    const result = twoSum([2, 7, 11, 15], 17);
    expect(result[0]).to.equal(0);
    expect(result[1]).to.equal(3);
  });
  it("should return [1, 2]", () => {
    const result = twoSum([2, 7, 11, 15], 18);
    expect(result[0]).to.equal(1);
    expect(result[1]).to.equal(2);
  });
  it("should return [3, 4]", () => {
    const result = twoSum([2, 7, 11, 15, 15, 15], 30);
    expect(result[0]).to.equal(3);
    expect(result[1]).to.equal(4);
  });
  it("should return [0, 3]", () => {
    const result = twoSum([15, 7, 15, 11, 15], 26);
    expect(result[0]).to.equal(0);
    expect(result[1]).to.equal(3);
  });
});
