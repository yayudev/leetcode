import { expect, test } from "bun:test";
import { twoSum } from "./two-sum";

test("Case #1", () => {
  const result = twoSum([2, 7, 11, 15], 9);
  expect(result).toEqual([0, 1]);
});

test("Case #2", () => {
  const result = twoSum([3, 2, 4], 6);
  expect(result).toEqual([1, 2]);
});

test("Case #3", () => {
  const result = twoSum([3, 3], 6);
  expect(result).toEqual([0, 1]);
});
