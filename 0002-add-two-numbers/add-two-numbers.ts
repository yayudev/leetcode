import { ListNode } from "./ListNode";

export function addTwoNumbers(
  listA: ListNode | null,
  listB: ListNode | null,
): ListNode {
  let resultList: ListNode | null = null;
  let currentNode: ListNode | null = null;
  let carried = 0;

  while (true) {
    const sum = (listA?.val ?? 0) + (listB?.val ?? 0) + carried;
    const reminder = sum % 10;
    carried = Math.floor(sum / 10);

    if (!resultList) {
      resultList = new ListNode(reminder);
      currentNode = resultList;
    } else if (currentNode) {
      currentNode.next = new ListNode(reminder);
      currentNode = currentNode.next;
    }

    listA = listA?.next ?? null;
    listB = listB?.next ?? null;

    if (!listA && !listB && !carried) break;
  }

  return resultList as ListNode;
}
