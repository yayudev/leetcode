import { expect, test } from "bun:test";
import { addTwoNumbers } from "./add-two-numbers";
import { createListNodeFromArray, nodeListToArray } from "./ListNode";

test("Case #1", () => {
  const list1 = createListNodeFromArray([2, 4, 3]);
  const list2 = createListNodeFromArray([5, 6, 4]);

  const result = addTwoNumbers(list1, list2);
  expect(nodeListToArray(result)).toEqual([7, 0, 8]);
});

test("Case #2", () => {
  const list1 = createListNodeFromArray([0]);
  const list2 = createListNodeFromArray([0]);

  const result = addTwoNumbers(list1, list2);
  expect(nodeListToArray(result)).toEqual([0]);
});

test("Case #3", () => {
  const list1 = createListNodeFromArray([9, 9, 9, 9, 9, 9, 9]);
  const list2 = createListNodeFromArray([9, 9, 9, 9]);

  const result = addTwoNumbers(list1, list2);
  expect(nodeListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});
