import { test, expect } from "bun:test";
import { lenghtOfLongestSubstring } from "./lengthOfLongestSubstring";

test("Case #1", () => {
  const result = lenghtOfLongestSubstring("abcabcbb");

  expect(result).toBe(3);
});

test("Case #2", () => {
  const result = lenghtOfLongestSubstring("bbbbb");

  expect(result).toBe(1);
});

test("Case #3", () => {
  const result = lenghtOfLongestSubstring("pwwkew");

  expect(result).toBe(3);
});

test("Case #4", () => {
  const result = lenghtOfLongestSubstring("aab");
  expect(result).toBe(2);
});

test("Case #5", () => {
  const result = lenghtOfLongestSubstring("abba");
  expect(result).toBe(2);
});

test("Case #6", () => {
  const result = lenghtOfLongestSubstring("abbac");
  expect(result).toBe(3);
});
