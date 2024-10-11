const assert = require("assert");
const addStringNumbers = require("../src/app");

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    assert.strictEqual(addStringNumbers(""), 0);
  });

  it("should return the number itself when input is a single number", () => {
    assert.strictEqual(addStringNumbers("1"), 1);
  });

  it("should return the sum of two comma-separated numbers", () => {
    assert.strictEqual(addStringNumbers("1,2"), 3);
  });

  it("should return the sum of multiple comma-separated numbers", () => {
    assert.strictEqual(addStringNumbers("1,2,3,4,5"), 15);
  });
});
