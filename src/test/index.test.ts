import { describe, it, test } from "node:test";
import { strict as assert } from "node:assert";
import { contentPath, handleMedia } from "../utils";
import { PathLike } from "node:fs";
test("make file path test", async () => {
  // This test fails because it throws an exception.
  let saga = "JOJO";
  let siglas = "JOJODIU";
  let kind = "episodes";
  const PATH_TO_FILES : PathLike =  await handleMedia('anime', kind, '01.MP4',siglas,saga);
  let result = `${contentPath(`${PATH_TO_FILES}`)}`;
  let expected = 'media/animes/JOJO/JOJODIU/episodes/01.mp4';
  console.log('====================================');
  console.log(result + " " + expected);
  console.log('====================================');
  assert.strictEqual(result, expected);
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
