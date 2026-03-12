// 先把链表转变为数组，在对数组进行比较
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let ans = [];
  let cur = head;
  while (cur.next !== null) {
    ans.push(cur.val);
    cur = cur.next;
  }

  let result = [...ans].reverse();
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] !== result[i]) {
      return false;
    }
  }
  return true;
};
