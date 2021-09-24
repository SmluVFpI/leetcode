"use strict";
const expect = require("chai").expect;
const addTwoNumbers = require("../../../dist/00/0/2.js").addTwoNumbers;

describe("0002.js function test", () => {
  it("should return [7, 0, 8]", () => {
    const result = addTwoNumbers([2, 4, 3], [5, 6, 4]);
    expect(result[0]).to.equal(7);
    expect(result[1]).to.equal(0);
    expect(result[2]).to.equal(8);
  });
  it("should return [7, 0, 5]", () => {
    const result = addTwoNumbers([2, 4], [5, 6, 4]);
    expect(result[0]).to.equal(7);
    expect(result[1]).to.equal(0);
    expect(result[2]).to.equal(5);
  });
  it("should return [7, 0, 4]", () => {
    const result = addTwoNumbers([2, 4, 3], [5, 6]);
    expect(result[0]).to.equal(7);
    expect(result[1]).to.equal(0);
    expect(result[2]).to.equal(4);
  });
  it("should return [7, 0, 0, 1]", () => {
    const result = addTwoNumbers([2, 4, 3], [5, 6, 6]);
    expect(result[0]).to.equal(7);
    expect(result[1]).to.equal(0);
    expect(result[2]).to.equal(0);
    expect(result[3]).to.equal(1);
  });
});
