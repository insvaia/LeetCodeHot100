/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let count = 0;
  let curr = head;
  while (curr) {
    count++;
    curr = curr.next;
  }

  if (count < k) {
    return head;
  }

  let pre = null;
  let cur = head;

  for (let i = 0; i < k; i++) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  head.next = reverseKGroup(cur, k);

  return pre;
};
