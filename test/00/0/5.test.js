"use strict";
const expect = require("chai").expect;
const manacher =
  require("../../../dist/00/0/5.js").manacher;

describe("0003.js function test", () => {
  it("should return 1221", () => {
    const result = manacher('12212');
    expect(result).to.equal('1221');
  });
  it("should return 22122", () => {
    const result = manacher('122122');
    expect(result).to.equal('22122');
  });
  it("should return wsw", () => {
    const result = manacher('waabwswfd');
    expect(result).to.equal('wsw');
  });
  it("should return 12345654321", () => {
    const result = manacher('12345654321');
    expect(result).to.equal('12345654321');
  });
  it("should return wsw", () => {
    const result = manacher('15996377777399999');
    expect(result).to.equal('3777773');
  });
});
