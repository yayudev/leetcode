export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createListNodeFromArray(arr: number[]): ListNode {
  let initialNode = new ListNode(arr[0]);

  let currentNode = initialNode;
  for (let item of arr.slice(1)) {
    currentNode.next = new ListNode(item);
    currentNode = currentNode.next;
  }

  return initialNode;
}

export function nodeListToArray(initialNode: ListNode): number[] {
  let currentNode: ListNode | null = initialNode;
  let arr = [initialNode.val];

  while ((currentNode = currentNode?.next)) {
    arr.push(currentNode.val);
  }

  return arr;
}
