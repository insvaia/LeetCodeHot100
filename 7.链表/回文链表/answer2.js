// 双指针节省算法复杂度
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
  const result = [];
  let cur = head;
  while (cur !== null) {
    result.push(cur.val);
    cur = cur.next;
  }

  let left = 0;
  let right = result.length - 1;
  while (left > right) {
    if (result[left] !== result[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
