import { describe, it, test } from "node:test";
import { strict as assert } from "node:assert";
test("synchronous failing test", () => {
  // This test fails because it throws an exception.
  assert.strictEqual(1, 2);
});

// The skip option is used, but no message is provided.
test("skip option", { skip: true }, () => {
  // This code is never executed.
});

// The skip option is used, and a message is provided.
test("skip option with message", { skip: "this is skipped" }, () => {
  // This code is never executed.
});

test("skip() method", (t:any) => {
  // Make sure to return here as well if the test contains additional logic.
  t.skip();
});

test("skip() method with message", (t:any) => {
  // Make sure to return here as well if the test contains additional logic.
  t.skip("this is skipped");
});

describe("A thing", () => {
  it("should work", () => {
    assert.strictEqual(1, 1);
  });

  it("should be ok", () => {
    assert.strictEqual(2, 2);
  });

  describe("a nested thing", () => {
    it("should work", () => {
      assert.strictEqual(3, 3);
    });
  });
});
