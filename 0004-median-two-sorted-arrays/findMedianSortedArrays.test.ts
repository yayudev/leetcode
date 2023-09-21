import { test, expect } from "bun:test";
import { findMedianSortedArrays } from "./findMedianSortedArrays";

test("Case #1", () => {
  const array1 = [1, 2];
  const array2 = [3];
  const result = findMedianSortedArrays(array1, array2);
  expect(result).toBe(2);
});

test("Case #2", () => {
  const array1 = [1, 2];
  const array2 = [3, 4];
  const result = findMedianSortedArrays(array1, array2);
  expect(result).toBe(2.5);
});

test("Case #3", () => {
  const array1 = [0];
  const array2 = [3, 4];
  const result = findMedianSortedArrays(array1, array2);
  expect(result).toBe(3);
});
