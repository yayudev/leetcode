import { expect, test } from "bun:test";
import { isValid } from "./valid-parentheses";

test("Case #1", () => {
  const result = isValid("()");
  expect(result).toBeTrue();
});

test("Case #2", () => {
  const result = isValid("()[]{}");
  expect(result).toBeTrue();
});

test("Case #3", () => {
  const result = isValid("[)");
  expect(result).toBeFalse();
});

test("Case #4", () => {
  const result = isValid("([{}])");
  expect(result).toBeTrue();
});

test("Case #5", () => {
  const result = isValid("([))");
  expect(result).toBeFalse();
});

test("Case 6", () => {
  const result = isValid("((()))");
  expect(result).toBeTrue();
});

test("Case 7", () => {
  const result = isValid("[");
  expect(result).toBeFalse();
});

test("Case 8", () => {
  const result = isValid("]");
  expect(result).toBeFalse();
});
