"use strict";
const expect = require("chai").expect;
const lengthOfLongestSubstring =
  require("../../../dist/00/0/3.js").lengthOfLongestSubstring;

describe("0003.js function test", () => {
  it("should return 3", () => {
    const result = lengthOfLongestSubstring("abcabcbb");
    expect(result).to.equal(3);
  });
  it("should return 1", () => {
    const result = lengthOfLongestSubstring("bbbbb");
    expect(result).to.equal(1);
  });
  it("should return 3", () => {
    const result = lengthOfLongestSubstring("pwwkew");
    expect(result).to.equal(3);
  });
  it("should return 7", () => {
    const result = lengthOfLongestSubstring("abcdefgd");
    expect(result).to.equal(7);
  });
});
