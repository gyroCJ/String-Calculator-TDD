const assert = require("assert");
const addStringNumbers = require("../src/app");

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    assert.strictEqual(addStringNumbers(""), 0);
  });

  it("should return the number itself when input is a single number", () => {
    assert.strictEqual(addStringNumbers("1"), 1);
  });
});
