// 充分利用字符串的知识
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
  let a = "";
  let b = "";
  while (head !== null) {
    a = a + head.val;
    b = b + head.val;
    head = head.next;
  }
  return a === b;
};
