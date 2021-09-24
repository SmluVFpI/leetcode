"use strict";
const expect = require("chai").expect;
const findMedianSortedArrays =
  require("../../../dist/00/0/4.js").findMedianSortedArrays;

describe("0003.js function test", () => {
  it("should return 2", () => {
    const result = findMedianSortedArrays([1, 3], [2]);
    expect(result).to.equal(2);
  });
  it("should return 2.5", () => {
    const result = findMedianSortedArrays([1, 2], [3, 4]);
    expect(result).to.equal(2.5);
  });
  it("should return 5.5", () => {
    const result = findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);
    expect(result).to.equal(5.5);
  });
  it("should return 5", () => {
    const result = findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8]);
    expect(result).to.equal(5);
  });
  it("should return 4", () => {
    const result = findMedianSortedArrays([1, 3, 5, 7, 9], [2]);
    expect(result).to.equal(4);
  });
  it("should return 6.5", () => {
    const result = findMedianSortedArrays([7], [2, 4, 6, 8, 10]);
    expect(result).to.equal(6.5);
  });
});
